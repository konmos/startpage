function create_li(key, value) {
  let li = document.createElement('li');
  li.innerHTML = '<span class="key">' + key + '</span>' + value;
  return li;
}

var current_url = '';

document.getElementById('input').addEventListener('input', function() {
  let text = document.getElementById('input').value.trim();

  current_url = '';
  document.getElementById('input-helper').innerHTML = '';

  if (!text) {
    return;
  }

  let parts = text.split(' ');
  let current_level = config;
  let resolved_url = '';
  let fallback_url = config['default_url'];

  let query = '';

  for (p in parts) {
    let part = parts[p];

    if ('default_url' in current_level) {
      fallback_url = current_level['default_url'];
      query = parts.slice(p).join(' ');
    }

    if ('shortcuts' in current_level && part in current_level['shortcuts']) {
      resolved_url = current_level['shortcuts'][part]['url'];
      current_level = current_level['shortcuts'][part];
    } else {
      resolved_url = '';
      break;
    }
  }

  let hints = [];
  let default_used = false;

  if (resolved_url) {
    // this is always a perfect match to one of our shortcuts
    current_url = resolved_url;

    if ('shortcuts' in current_level) {
      for (s in current_level['shortcuts']) {
        hints.push(create_li(s, current_level['shortcuts'][s]['url']));
      }
    }
  } else {
    default_used = true;
    current_url = fallback_url.replace(/\$\{query\}/gm, encodeURIComponent(query));
  }

  let input_helper = document.getElementById('input-helper');

  input_helper.appendChild(create_li('', current_url));

  if ('default_url' in current_level && !default_used) {
    input_helper.appendChild(create_li(':', current_level['default_url']));
  }

  for (h of hints) {
    input_helper.appendChild(h);
  }
});

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.key === "Enter" && current_url) {
    window.open(current_url, "_self");
  }
});

function rsplit(str, sep, maxsplit) {
  let split = str.split(sep);
  return maxsplit ? [ split.slice(0, -maxsplit).join(sep) ].concat(split.slice(-maxsplit)) : split;
}

function get_hostname(url) {
  let u = new URL(url);
  return u.hostname;
}

let shortcuts_ul = document.getElementById('shortcuts');

for (shortcut in config['shortcuts']) {
  shortcuts_ul.appendChild(create_li(
    shortcut, get_hostname(config['shortcuts'][shortcut]['url'])
  ));
}

document.getElementById('input-prompt').innerText = input_prompt;

document.getElementById('input').focus();

// focus on input when clicked anywhere on body
document.body.addEventListener('click', e => {
  document.getElementById('input').focus();
});

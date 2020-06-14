const input_prompt = '[startpage@mozilla ~]$'

// ${query}  = any part of the string that did not match a shortcut (URL encoded)
const config = {
  "default_url": "https://duckduckgo.com/?q=${query}",

  "shortcuts": {
    "r": {
      "url": "https://old.reddit.com",
      "default_url": "https://old.reddit.com/search?q=${query}"
    },

    "y": {
      "url": "https://www.youtube.com",
      "shortcuts": {
        "s": {
          "url": "https://www.youtube.com/feed/subscriptions",
          'default_url': 'baz/${query}',
          "shortcuts": {
            "f": {
              "url": "${y}/f",
              'default_url': 'foo/${query}'
            }
          }
        },

        "t": {
          "url": "https://www.youtube.com/feed/trending",
          "shortcuts": {
            "z": {
              "url": "memer"
            }
          }
        }
      }
    }
  }
};

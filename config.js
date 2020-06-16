const input_prompt = '[startpage@mozilla ~]$'

// ${query}  = any part of the string that did not match a shortcut (URL encoded)
const config = {
  "default_url": "https://duckduckgo.com/?q=${query}",

  "shortcuts": {
    "g": {
      "url": "https://google.co.uk/",
      "default_url": "https://google.com/search?q=${query}"
    },

    "d": {
      "url": "https://duckduckgo.com/",
      "default_url": "https://duckduckgo.com/?q=${query}"
    },

    "r": {
      "url": "https://reddit.com",
      "default_url": "https://reddit.com/r/${query}",
      "shortcuts": {
        "d": {
          "url": "https://reddit.com/r/druggardening"
        },
        "g": {
          "url": "https://reddit.com/r/gwent"
        },
        "a": {
          "url": "https://reddit.com/r/anime"
        },
        "m": {
          "url": "https://reddit.com/r/manga"
        },
        "ap": {
          "url": "https://reddit.com/r/animepiracy"
        },
        "w": {
          "url": "https://reddit.com/r/witcher"
        }
      }
    },

    "y": {
      "url": "https://youtube.com/",
      "default_url": "https://youtube.com/results?search_query=${query}",
      "shortcuts": {
        "s": {
          "url": "https://youtube.com/feed/subscriptions"
        },
        "t": {
          "url": "https://youtube.com/feed/trending"
        }
      }
    },

    "n": {
      "url": "https://nyaa.si/",
      "default_url": "https://nyaa.si/?f=0&c=1_2&s=seeders&o=desc&q=${query}"
    },

    "a": {
      "url": "https://anilist.co/",
      "default_url": "https://anilist.co/search/anime?search=${query}"
    },

    "m": {
      "url": "https://mangadex.org/",
      "default_url": "https://mangadex.org/search?title=${query}"
    },

    "1x": {
      "url": "https://1337x.to",
      "default_url": "https://1337x.to/search/${query}/1/"
    },

    "e": {
      "url": "https://ebay.co.uk",
      "default_url": "https://ebay.co.uk/sch/i.html?_nkw=${query}"
    },

    "nx": {
      "url": "https://netflix.com"
    },

    "gh": {
      "url": "https://github.com"
    },

    "gm": {
      "url": "https://mail.google.com"
    },

    "s": {
      "url": "http://sharetheseeds.me/forum"
    },

    "aw": {
      "url": "https://aniwatch.me/",
      "default_url": "https://aniwatch.me/search?q=${query}"
    },

    "q": {
      "url": "https://qmail.qub.ac.uk"
    },

    "ra": {
      "url": "https://rarbg.to"
    }
  }
};

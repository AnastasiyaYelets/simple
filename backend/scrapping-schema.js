module.exports = [
  {
    name: 'kupi.tut.by',
    url: "https://kupi.tut.by/mobilnye-telefony/?onstock=1&sort=price&how=asc",
    queryKey: 'str',
    options: {
      items: {
        listItem: ".cItems_col",
        data: {
          title: '.cItems_title',
          price: {
            selector: '.prop_price',
            convert: x => x.replace(/[^0-9\,]+/g, '')
          },
          img: {
            selector: '.media img',
            attr: 'src'
          },
          link: {
            selector: ".cItems_title",
            attr: "href"
          }
        }
      }
    }
  },
  // {
  //   name: 'shop.by',
  //   url: "http://shop.by/telefoniya/telefony_mobilnye/?page_id=1&page_size=24&currency=BYB&to_order=&essense_id=926&mode=find&sort=price--number",
  //   queryKey: 'type_find',
  //   options: {
  //     items: {
  //       listItem: ".ModelList__ModelBlockRow",
  //       data: {
  //         title: {
  //           selector: '.ModelList__LinkModel span',
  //           eq: 0,
  //           convert: x => x.split(' ').slice(2).join(' ')
  //         },
  //         price: {
  //           selector: '.PriceBlock__PriceValue span',
  //           eq: 0,
  //           convert: x => x.replace(/[^0-9\,]+/g, '')
  //         },
  //         img: {
  //           selector: '.ModelList__LinkModel img',
  //           attr: 'src',
  //           convert: x => `https://shop.by${x}`
  //         },
  //         link: {
  //           selector: ".ModelList__NameBlock .ModelList__LinkModel",
  //           attr: "href",
  //           convert: x => `https://shop.by${x}`
  //         }
  //       }
  //     }
  //   }
  // },
  {
    name: 'deal.by',
    url: "https://deal.by/search?category=5090301",
    queryKey: 'search_term',
    options: {
      items: {
        listItem: ".x-gallery-tile",
        data: {
          title: '.x-gallery-tile__name span',
          price: {
            selector: '.x-gallery-tile__price span',
            convert: x => x.replace(/[^0-9\,]+/g, '')
          },
          img: {
            selector: '.x-gallery-tile__img img',
            attr: 'src',
          },
          link: {
            selector: ".x-gallery-tile__content .x-gallery-tile__img",
            attr: "href",
          }
        }
      }
    }
  },
  {
    name: 'ram.by',
    url: "http://ram.by/catalogsearch?",
    queryKey: 'q',
    options: {
      items: {
        listItem: ".item",
        data: {
          title: '.title h3 a',
          price: {
            selector: '.price-container',
            convert: x => x.replace(/[^0-9\,]+/g, '')
          },
          img: {
            selector: '.image a img',
            attr: 'src',
          },
          link: {
            selector: ".title h3 a",
            attr: "href",
          }
        }
      }
    }
  },
  {
    name: 'unishop.by',
    url: "https://unishop.by/search/?place=p6285",
    queryKey: 'query',
    options: {
      items: {
        listItem: ".product-list .item",
        data: {
          title: '.title a',
          price: {
            selector: '.side .val',
            convert: x => x.replace(/[^0-9\,]+/g, '')
          },
          img: {
            selector: '.vis img',
            attr: 'src',
            convert: x => `https://${x.slice(2)}`
          },
          link: {
            selector: ".title a",
            attr: "href",
            convert: x => `https://unishop.by${x}`
          }
        }
      }
    }
  },
  {
    name: 'svyaznoy.by',
    url: "https://www.svyaznoy.by/search/index.php?sort=s5",
    queryKey: 'q',
    options: {
      items: {
        listItem: ".b-product-block",
        data: {
          title: '.b-product-block__name',
          price: {
            selector: '.b-product-block__price .b-action-color',
            convert: x => x.replace(/[^0-9\,.]+/g, '').slice(0, -1)
          },
          img: {
            selector: '.b-image-link img',
            attr: 'src',
            convert: x => `https://svyaznoy.by${x}`
          },
          link: {
            selector: ".b-product-block__info a",
            attr: "href",
            convert: x => `https://svyaznoy.by${x}`
          }
        }
      }
    }
  },
  {
    name: 'ultra.by',
    url: "http://ultra.by/catalogsearch/result?cat=0",
    queryKey: 'q',
    options: {
      items: {
        listItem: ".grid-column .item",
        data: {
          title: '.product-name',
          price: {
            selector: '.price span',
            convert: x => x.replace(/[^0-9\,.]+/g, '')
          },
          img: {
            selector: '.product-image img',
            attr: 'src',
          },
          link: {
            selector: ".product-name",
            attr: "href",
          }
        }
      }
    }
  },
  {
    name: 'gsm555.by',
    url: "https://gsm555.by/search/?",
    queryKey: 'search',
    options: {
      items: {
        listItem: ".products .product-layout",
        data: {
          title: '.name a',
          price: {
            selector: '.price div',
            convert: x => x.replace(/[^0-9\,.]+/g, '')
          },
          img: {
            selector: '.image img',
            attr: 'src',
          },
          link: {
            selector: ".name a",
            attr: "href",
          }
        }
      }
    }
  },
  {
    name: '5element.by',
    url: "https://5element.by/search/?WHERE=67",
    queryKey: 'q',
    options: {
      items: {
        listItem: ".prod_table .item",
        data: {
          title: 'h4 a',
          price: {
            selector: 'h5',
            convert: x => x.replace(/[^0-9\,.]+/g, '')
          },
          img: {
            selector: '.image img',
            attr: 'src',
            convert: x => `https://5element.by${x}`
          },
          link: {
            selector: "h4 a",
            attr: "href",
            convert: x => `https://5element.by${x}`
          }
        }
      }
    }
  },
  {
    name: '21vek.by',
    url: "https://www.21vek.by/search/?sa=",
    queryKey: 'term',
    options: {
      items: {
        listItem: ".b-result .result__item",
        data: {
          title: '.result__name',
          price: {
            selector: '.result__price',
            convert: x => x.replace(/[^0-9\,.]+/g, '').slice(0, -1)
          },
          img: {
            selector: '.result__img img',
            attr: 'src',
          },
          link: {
            selector: ".result__link",
            attr: "href",
          }
        }
      }
    }
  },
  {
    name: '1k.by',
    url: "http://1k.by/products/search?s_categoryid=304&filter=all",
    queryKey: 's_keywords',
    options: {
      items: {
        listItem: ".search-result_body .product_block",
        data: {
          title: '.pr-line_name',
          price: {
            selector: '.pr-price_mark',
            convert: x => x.replace(/[^0-9\,.]+/g, '').slice(0, -2)
          },
          img: {
            selector: '.pr-line_pic img',
            attr: 'src',
          },
          link: {
            selector: ".pr-line_link",
            attr: "href",
          }
        }
      }
    }
  },
  {
    name: 'market.yandex.by',
    url: "https://market.yandex.by/catalog/54726/list?deliveryincluded=0&onstock=1&how=aprice",
    queryKey: 'text',
    options: {
      items: {
        listItem: ".snippet-card",
        data: {
          title: '.snippet-card__header-text',
          price: {
            selector: '.snippet-card__price',
            convert: x => x.replace(/[^0-9\,.]+/g, '').slice(0, -2)
          },
          img: {
            selector: '.snippet-card__image img',
            attr: 'src',
            convert: x => x.slice(2)
          },
          link: {
            selector: ".snippet-card__header-link",
            attr: "href",
            convert: x => `https://market.yandex.by${x}`
          }
        }
      }
    }
  },
  {
    name: 'amd.by',
    url: "http://www.amd.by/search/page/1/?",
    queryKey: 'findtext',
    options: {
      items: {
        listItem: "tr",
        data: {
          title: '.h33',
          price: {
            selector: '.firstPrice',
            eq: 0,
            convert: x => x.replace(/[^0-9\,.]+/g, '').slice(0, -1)
          },
          img: {
            selector: 'td img',
            eq: 1,
            attr: 'src',
          },
          link: {
            selector: ".h33",
            attr: "href",
          }
        }
      }
    }
  }
]

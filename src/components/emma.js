import React, { Component, useEffect } from "react"
import Layout from "../components/layout"
import { Sticky, Section } from "../components/intro"
import { ButtonHome } from "../components/button"
import { Helmet } from "react-helmet"

import Loadable from "@loadable/component"
import ShopifyBuy from "@shopify/buy-button-js"

const ShopifyEmma = (props) => {
    useEffect(() => {
        const client = ShopifyBuy.buildClient({
            domain: "emma-health.myshopify.com",
            storefrontAccessToken: "a3553d262303e4ed45bd3dadb894d333",
        })
        const ui = ShopifyBuy.UI.init(client)
        ui.createComponent('product', {
            id: '4458480435283',
            node: document.getElementById('bestel-emma'),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
                "product": {
                    "styles": {
                        "product": {
                            "@media (min-width: 601px)": {
                                "max-width": "100%",
                                "margin-left": "0",
                                "margin-bottom": "50px"
                            },
                            "text-align": "left"
                        },
                        "title": {
                            "font-size": "26px"
                        },
                        "price": {
                            "font-size": "18px"
                        },
                        "compareAt": {
                            "font-size": "15.299999999999999px"
                        },
                        "unitPrice": {
                            "font-size": "15.299999999999999px"
                        },
                        "button": {
                            "font- size": "1rem",
                            "font-weight": "700",
                            "border": "2px solid transparent",
                            "border-radius": "0px",
                            "background": "#f6f6f6",
                            "color": "#329632",
                            ':hover': {
                                "background": "#ecf8ec",
                                "box-shadow": "0 4px 8px 0 rgb(0 0 0 / 20%), 0 3px 10px 0 rgb(0 0 0 / 19%)",
                                "text-decoration": "none"
                            }
                        }
                    },
                    "layout": "horizontal",
                    "contents": {
                        "img": false,
                        "imgWithCarousel": true,
                        "description": true
                    },
                    "width": "100%",
                    "text": {
                        "button": "Bestel nu"
                    }
                },
                "productSet": {
                    "styles": {
                        "products": {
                            "@media (min-width: 601px)": {
                                "margin-left": "-20px"
                            }
                        }
                    }
                },
                "modalProduct": {
                    "contents": {
                        "img": false,
                        "imgWithCarousel": true,
                        "button": false,
                        "buttonWithQuantity": true
                    },
                    "styles": {
                        "product": {
                            "@media (min-width: 601px)": {
                                "max-width": "100%",
                                "margin-left": "0px",
                                "margin-bottom": "0px"
                            }
                        },
                        "title": {
                            "font-family": "Helvetica Neue, sans-serif",
                            "font-weight": "bold",
                            "font-size": "26px",
                            "color": "#4c4c4c"
                        },
                        "price": {
                            "font-family": "Helvetica Neue, sans-serif",
                            "font-weight": "normal",
                            "font-size": "18px",
                            "color": "#4c4c4c"
                        },
                        "compareAt": {
                            "font-family": "Helvetica Neue, sans-serif",
                            "font-weight": "normal",
                            "font-size": "15.299999999999999px",
                            "color": "#4c4c4c"
                        },
                        "unitPrice": {
                            "font-family": "Helvetica Neue, sans-serif",
                            "font-weight": "normal",
                            "font-size": "15.299999999999999px",
                            "color": "#4c4c4c"
                        }
                    },
                    "text": {
                        "button": "Add to cart"
                    }
                },
                "option": {},
                "cart": {
                    "text": {
                        "title": "Winkelwagen",
                        "total": "Subtotaal",
                        "empty": "Winkelwagen leeg",
                        "button": "Bestellen"
                    }
                },
                "toggle": {
                    "styles": {
                        "toggle": {
                            "background-color": "#329632",
                            ':hover': {
                                "background": "#8f8f8f"
                            }
                        }
                        
                    }
                }
            },
        });
    })

    return (
        <div id="bestel-emma"></div>
    )
}

export default ShopifyEmma
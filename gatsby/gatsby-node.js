const path = require('path');
const fetch = require(`node-fetch`);
let pageData,
layoutData,
header01ComponentsData,
header02ComponentsData,
header03ComponentsData,
paragraphComponentsData,
dateTimeComponentsData,
richTextComponentsData,
priceComponentsData,
numberComponentsData;

async function fetchData(url) {
    const result = await fetch(url);
    const resultData = await result.json();
    return resultData;
}

fetchData('http://localhost:1337/pages')
    .then((data) => {
        pageData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

fetchData('http://localhost:1337/layouts')
    .then((data) => {
        layoutData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

fetchData('http://localhost:1337/header-01-components')
    .then((data) => {
        header01ComponentsData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

fetchData('http://localhost:1337/header-02-components')
    .then((data) => {
        header02ComponentsData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

fetchData('http://localhost:1337/header-03-components')
    .then((data) => {
        header03ComponentsData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

fetchData('http://localhost:1337/paragraph-components')
    .then((data) => {
        paragraphComponentsData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

fetchData('http://localhost:1337/date-time-components')
    .then((data) => {
        dateTimeComponentsData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

fetchData('http://localhost:1337/rich-text-components')
    .then((data) => {
        richTextComponentsData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

fetchData('http://localhost:1337/price-components')
    .then((data) => {
        priceComponentsData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

fetchData('http://localhost:1337/number-components')
    .then((data) => {
        numberComponentsData = data;
    },
    (error) => {
        console.log('Error Occured');
        console.log(error);
    });

exports.createPages = ({ actions }) => {
    const { createPage, deletePage } = actions;

    pageData.forEach((page, pageIndex) => {
        let layouts = [];
        layoutData.forEach((layout, layoutIndex) => {
            let components = [];
            if (layout.page && (page.id === layout.page.id)) {
                if(header01ComponentsData.length !== 0) {
                    header01ComponentsData.forEach((header01Component, componentIndex) => {
                        if ((header01Component.layout && header01Component.page) && (layout.id === header01Component.layout.id && page.id === header01Component.page.id)) {
                            header01Component.type = "header01";
                            components.push(header01Component);
                        }
                    })
                }
                if(header02ComponentsData.length !== 0) {
                    header02ComponentsData.forEach((header02Component, componentIndex) => {
                        if ((header02Component.layout && header02Component.page) && (layout.id === header02Component.layout.id && page.id === header02Component.page.id)) {
                            header02Component.type = "header02";
                            components.push(header02Component);
                        }
                    })
                }
                if(header03ComponentsData.length !== 0) {
                    header03ComponentsData.forEach((header03Component, componentIndex) => {
                        if ((header03Component.layout && header03Component.page) && (layout.id === header03Component.layout.id && page.id === header03Component.page.id)) {
                            header03Component.type = "header03";
                            components.push(header03Component);
                        }
                    })
                }
                if (paragraphComponentsData.length !== 0) {
                    paragraphComponentsData.forEach((paragraphComponent, componentIndex) => {
                        if ((paragraphComponent.layout && paragraphComponent.page) && (layout.id === paragraphComponent.layout.id && page.id === paragraphComponent.page.id)) {
                            paragraphComponent.type = "paragraph";
                            components.push(paragraphComponent);
                        }
                    })
                }
                if (dateTimeComponentsData.length !== 0) {
                    dateTimeComponentsData.forEach((dateTimeComponent, componentIndex) => {
                        if ((dateTimeComponent.layout && dateTimeComponent.page) && (layout.id === dateTimeComponent.layout.id && page.id === dateTimeComponent.page.id)) {
                            dateTimeComponent.type = "dateTime";
                            components.push(dateTimeComponent);
                        }
                    })
                }
                if (richTextComponentsData.length !== 0) {
                    richTextComponentsData.forEach((richTextComponent, componentIndex) => {
                        if ((richTextComponent.layout && richTextComponent.page) && (layout.id === richTextComponent.layout.id && page.id === richTextComponent.page.id)) {
                            richTextComponent.type = "richText";
                            components.push(richTextComponent);
                        }
                    })
                }
                if (priceComponentsData.length !== 0) {
                    priceComponentsData.forEach((priceComponent, componentIndex) => {
                        if ((priceComponent.layout && priceComponent.page) && (layout.id === priceComponent.layout.id && page.id === priceComponent.page.id)) {
                            priceComponent.type = "price";
                            components.push(priceComponent);
                        }
                    })
                }
                if (numberComponentsData.length !== 0) {
                    numberComponentsData.forEach((numberComponent, componentIndex) => {
                        if ((numberComponent.layout && numberComponent.page) && (layout.id === numberComponent.layout.id && page.id === numberComponent.page.id)) {
                            numberComponent.type = "number";
                            components.push(numberComponent);
                        }
                    })
                }
                layout.components = components;
                layouts.push(layout);
            }
        })
        page.layouts = layouts;
    })

    pageData.forEach((page, index) => {
        createPage({
            path: page.path,
            component: require.resolve("./src/templates/pageTemplate.js"),
            context: {
                page: page
            },
        });
    });
}
const path = require('path');
const jsonData = require('./content/data/data.json');
const fetch = require(`node-fetch`);
const { buildTimeDataFetch, fetchResources, pages, buildCustomPage, customPagesList } = jsonData;

async function fetchData(url) {
    const result = await fetch(url);
    const resultData = await result.json();
    return resultData;
}

if (buildTimeDataFetch) {
    fetchResources.forEach((resources, index) => {
        let { url, targets } = resources;
        fetchData(url).then(
            (data) => {
                targets.forEach((target, index) => {
                    let { pageId, layoutId, components } = target;
                    components.forEach((component, index) => {
                        let { componentId, dataSource } = component;
                        // To send only required property to component
                        // dataSource.forEach((dataProperty, index) => {
                        //     console.log(data[dataProperty]);
                        // });
                        pages.forEach((page, pageIndex) => {
                            if (pageId === page.id) {
                                let { layout } = page;
                                layout.forEach((section, sectionIndex) => {
                                    if (layoutId === section.id) {
                                        let { components } = section;
                                        components.forEach((component, componentIndex) => {
                                            if (componentId === component.id) {
                                                pages[pageIndex]['layout'][sectionIndex]['components'][componentIndex]['fetchedData'] = data;
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    });
                });
            },
            (error) => {
                console.log('Error Occured');
                console.log(error);
            }
        )
    });
}

exports.createPages = ({ actions }) => {
    const { createPage, deletePage } = actions;
    if (buildCustomPage) {
        pages.forEach((page, index) => {
            customPagesList.forEach((customPage, pageIndex) => {
                if (customPage === page.id) {
                    createPage({
                        path: page.path,
                        component: require.resolve("./src/templates/pageTemplate.js"),
                        context: {
                            page: page
                        },
                    });
                }
            })
        });
    } else { 
        pages.forEach((page, index) => {
            createPage({
                path: page.path,
                component: require.resolve("./src/templates/pageTemplate.js"),
                context: {
                    page: page
                },
            });
        });
    }
}
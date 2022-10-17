import React from "react"
import Layout from './../components/layout/layout';
import TopLayout from './../components/layout/topLayout/topLayout';
import LeftLayout from './../components/layout/leftLayout/leftLayout';
import RightLayout from './../components/layout/rightLayout/rightLayout';
import MiddleLayout from './../components/layout/middleLayout/middleLayout';
import BottomLayout from './../components/layout/bottomLayout/bottomLayout';
import ToolsList from '../components/toolsList';

const getComponentListForTheSection = (section) => {
    let { components } = section;
    let itemsArray = [];

    components.forEach((component, index) => {
        let { data, styles, id, fetchedData, title, description } = component;
        let type = component.type;

        Object.keys(ToolsList).map((item, index) => {
            if (type === item) {
                let componentData = {
                    id: id,
                    data: data,
                    fetchedData: fetchedData,
                    styles: styles,
                    ComponentItem: ToolsList[item],
                    title: title,
                    description: description
                }
                itemsArray.push(componentData);
            }
            return itemsArray;
        });
    });

    return itemsArray;
}

const pageTemplate = (props) => {
    const { pageContext } = props;
    const { page } = pageContext;
    const { layouts } = page;
    let sectionTop, sectionBottom, sectionLeft, sectionRight, sectionMiddle; 
    let topLayoutComponentsToRender,
    bottomLayoutComponentsToRender,
    leftLayoutComponentsToRender,
    rightLayoutComponentsToRender,
    middleLayoutComponentsToRender;

    layouts.forEach((element, index) => {
        switch (element.section_layout_type.name) {
            case 'sectionTop':
                sectionTop = element;
                topLayoutComponentsToRender = getComponentListForTheSection(element).map((item, index) => {
                    let { ComponentItem, id } = item;
                    return <ComponentItem key={id} data={ item } />
                })
                break;
            case 'sectionBottom':
                sectionBottom = element;
                bottomLayoutComponentsToRender = getComponentListForTheSection(element).map((item, index) => {
                    let { ComponentItem, id } = item;
                    return <ComponentItem key={id} data={ item } />
                })
                break;
            case 'sectionLeft':
                sectionLeft = element;
                leftLayoutComponentsToRender = getComponentListForTheSection(element).map((item, index) => {
                    let { ComponentItem, id } = item;
                    return <ComponentItem key={id} data={ item } />
                })
                break;
            case 'sectionRight':
                sectionRight = element;
                rightLayoutComponentsToRender = getComponentListForTheSection(element).map((item, index) => {
                    let { ComponentItem, id } = item;
                    return <ComponentItem key={id} data={ item } />
                })
                break;
            case 'sectionMiddle':
                sectionMiddle = element;
                middleLayoutComponentsToRender = getComponentListForTheSection(element).map((item, index) => {
                    let { ComponentItem, id } = item;
                    return <ComponentItem key={id} data={ item } />
                })
                break;
            default:
                break;
        }
    });

    return (
        <Layout data={ page }>
            <TopLayout data={ sectionTop }>
                { topLayoutComponentsToRender }
            </TopLayout>
            <LeftLayout data={ sectionLeft }>
                { leftLayoutComponentsToRender }
            </LeftLayout>
            <RightLayout data={ sectionRight }>
                { rightLayoutComponentsToRender }
            </RightLayout>
            <MiddleLayout data={ sectionMiddle }>
                { middleLayoutComponentsToRender }
            </MiddleLayout>
            <BottomLayout data={ sectionBottom }>
                { bottomLayoutComponentsToRender }
            </BottomLayout>
        </Layout>
    )
}

export default pageTemplate

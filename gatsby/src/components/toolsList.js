import { ParagraphComponent as Paragraph} from './tools/paragraphComponents/paragraphComponent';
import { header01Component as Header01 } from './tools/titleComponents/header01Component';
import { ImageComponent as Image } from './tools/imageComponents/imageComponent';
import { FetchData } from './tools/formComponents/fetchData';
import { UserFetchData } from './tools/formComponents/userFetchData';
import { DateTimeComponent } from './tools/dateTimeComponent/dateTimeComponent';
import { RichTextComponent } from './tools/richTextComponent/richTextComponent';
import { PriceComponent } from './tools/priceComponent/priceComponent';
import { NumberComponent } from './tools/numberComponent/numberComponent';
import { header02Component } from './tools/titleComponents/header02Component';
import { header03Component } from './tools/titleComponents/header03Component';

const ToolsList = {
    'paragraph': Paragraph,
    'header01': Header01,
    'header02': header02Component,
    'header03': header03Component,
    'image': Image,
    'fetchData': FetchData,
    'userFetchData': UserFetchData,
    'dateTime': DateTimeComponent,
    'richText': RichTextComponent,
    'price': PriceComponent,
    'number': NumberComponent
};

export default ToolsList
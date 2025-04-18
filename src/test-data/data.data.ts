import {
  ContentModel,
  HeaderModel,
  NameModel,
  PathModel,
} from '../models/data.model';

export const uploadFile: PathModel = {
  file: 'src/test-data/files-to-upload/DP.jpg',
};

export const zoom: HeaderModel = {
  header: 'Detailed Preview DP.jpg (750.62 KB)',
};

export const editor: HeaderModel = {
  header: 'CKEditor',
};

export const pdfContent: ContentModel = {
  content: 'Test file PDF',
};

export const pdfFileName: NameModel = {
  name: 'info.pdf',
};

export const firstCountry: NameModel = {
  name: 'sta',
};

export const secondCountry: NameModel = {
  name: 'france',
};

export const firstSentence: ContentModel = {
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const secondSentence: ContentModel = {
  content:
    'Proin quam augue, gravida non luctus sit amet, semper eu elit. Suspendisse blandit nisi nec maximus malesuada. Aliquam sit amet quam dolor. Fusce nisi dolor, scelerisque quis diam sed, consectetur interdum ipsum. Fusce bibendum dui nisl, sit amet pharetra mi cursus at. Pellentesque ut euismod erat. Suspendisse metus purus, elementum et quam sed, dictum euismod tortor. Fusce quis justo eros. Duis vitae urna sed orci lobortis iaculis quis id leo.',
};

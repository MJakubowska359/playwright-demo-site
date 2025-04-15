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
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

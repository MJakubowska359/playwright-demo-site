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

import {
  ContentModel,
  HeaderModel,
  NameModel,
  PathModel,
  UrlModel,
} from '../models/data.model';

export const uploadFile: PathModel = {
  file: 'src/test-data/files-to-upload/DP.jpg',
};

export const imageInNote: PathModel = {
  file: 'src/test-data/files-to-upload/fonts.jpg',
};

export const zoom: HeaderModel = {
  header: 'Detailed Preview DP.jpg (750.62 KB)',
};

export const editor: HeaderModel = {
  header: 'CKEditor',
};

export const note: HeaderModel = {
  header: 'SummerNote',
};

export const image: HeaderModel = {
  header: 'Insert Image',
};

export const singleModal: HeaderModel = {
  header: 'Modal title',
};

export const multipleModal: HeaderModel = {
  header: 'First Modal',
};

export const modalPage: HeaderModel = {
  header: 'Bootstrap Modal',
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

export const firstNote: ContentModel = {
  content:
    'Comic sans to jedna z najbardziej znienawidzonych czcionek przez grafików. Wydawać by się więc mogło, że nie jest ona za często używana, ale jest wręcz odwrotnie. Jej popularność jest na tyle duża, że w niektórych krajach ma ona swoje święto. W Holandii obchodzony jest dzień Comic sans. W pierwszy piątek lipca radiowi prezenterzy zachęcają, aby korzystać tylko i wyłącznie z tego fontu. Natomiast w Skype, przy wyborze czcionki CS pojawia się smutna buźka.',
};

export const secondNote: ContentModel = {
  content:
    'Ciekawostka: Comic Sans posiada wiele dystynktywnych cech ułatwiających jego odczytanie osobom z dysleksją.',
};

export const fontsImage: UrlModel = {
  url: 'https://i1.kwejk.pl/k/obrazki/2019/07/6CNgmPYs9Nq2p3HX.jpg',
};

export const CuriositiesSource: UrlModel = {
  url: 'https://rocketjobs.pl/blog/comic-sans-to-czcionka-dla-dyslektykow-o-co-chodzi',
};

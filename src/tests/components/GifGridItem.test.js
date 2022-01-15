import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('pruebas para el componente GifGridItem ', () => {
    const title = 'test title';
    const url = 'http://localhost/test.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    test('debe de mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de tener un párrafo con el title ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener una imagen igual al url y alt de las props ', () => {
        const img = wrapper.find('img');
        // console.log( img.props() ); //Devuelve un objeto con las propiedades del elemento
        // console.log( img.prop('src') );//Devuelve solo la propiedad que se busca
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('debe de tener la clase animate__zoomIn ', () => {
        const div = wrapper.find('div');
        expect( div.hasClass('animate__zoomIn') ).toBe(true);
    })
    
    
    
});

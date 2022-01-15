import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('pruebas para el componente GifExpertApp', () => {
    test('debe de mostrar el componente correctamente ', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de mostrar una lista de categorías ', () => {
        const categories = ['Chelsea','Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );
        
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    })
    
});

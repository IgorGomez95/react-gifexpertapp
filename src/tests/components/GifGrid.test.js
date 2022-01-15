import { shallow } from "enzyme";
import '@testing-library/jest-dom';

import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");//finje la llamada al hook

describe('pruebas para el componente GifGrid', () => {
    const category = 'Chelsea';
    test('debe de mostrar el componente correctamente ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs ', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'http://localhost',
                title: 'prueba'
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    })
    
    
});

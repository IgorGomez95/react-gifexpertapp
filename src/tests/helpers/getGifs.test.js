import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('debe de traer 10 elementos ', async() => {
        const gifs = await getGifs('Chelsea FC');

        expect( gifs.length ).toBe(10);
    });
    
    test('debe de traer un arreglo vacio si no se le manda una categoría ', async() => {
        const gifs = await getGifs('');

        expect( gifs.length ).toBe(0);
    });
});

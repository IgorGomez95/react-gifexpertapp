import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inicial ', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Marvel') );
        const { data, loading } = result.current;
        await waitForNextUpdate({timeout:2500});

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();
    });

    test('debe de retornar un arreglo de imgs y el loading en false ', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Marvel') );
        await waitForNextUpdate({timeout:2500});
        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBeFalsy();
    })
    
    
});

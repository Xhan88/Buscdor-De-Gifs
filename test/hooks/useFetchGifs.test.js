import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe('pruebas en el hook de nuestro useFetchGifs ', () => {

  test('debe de regresar el estado inicial', () => {

    const { result } = renderHook( () => useFetchGifs('OnePunch') );
     const {images, isLoading } = result.current;

     expect( images.length ).toBe(0);
     expect( isLoading ).toBeTruthy();
  });

  test( 'deve de retornar un arreglo de imagenes y isLoading en fales', async() => {

    const { result } = renderHook( () => useFetchGifs('OnePunch') );

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();


  });

});
import { render, screen } from '@testing-library/react';
import PokemonList from '../components/pokemonList/PokemonList';
import { Provider } from 'react-redux';
import { store } from '../app/store';

test('renders loading message', () => {
    render(
        <Provider store={store}>
            <PokemonList />
        </Provider>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

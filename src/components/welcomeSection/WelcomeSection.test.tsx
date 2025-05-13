import { render, screen } from '@testing-library/react';
import WelcomeSection from './WelcomeSection';

describe('WelcomeSection', () => {
  it('renderiza o título e o subtítulo corretamente', () => {
    render(<WelcomeSection title="Bem-vindo!" subtitle="É bom te ver por aqui." />);

    expect(screen.getByText('Bem-vindo!')).toBeInTheDocument();
    expect(screen.getByText('É bom te ver por aqui.')).toBeInTheDocument();
  });
});
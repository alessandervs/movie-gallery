

interface GenreProps {
  selectedGenre: {
    title: string;
  }
}

export function Header({ selectedGenre }: GenreProps) {

  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}
import { GenreResponseProps } from '../../App'

import './sidebar.scss';

import { Button } from '../Button/Button';

interface GenreProps {
  listGenre: GenreResponseProps[]
  onClickButton: (id: number) => void;
  selectedId: number;
}

export function SideBar({ listGenre, onClickButton, selectedId }: GenreProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {listGenre.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedId === genre.id}
          />
        ))}
      </div>

    </nav>
  )

}
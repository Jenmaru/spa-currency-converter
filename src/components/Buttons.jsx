import { ButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';

const MainButtons = ({
  page, pages, setPage, name,
}) => (
  <ButtonGroup className="d-flex" style={{ marginTop: '1rem' }}>
    {pages.map((pagess, id) => (
      <ToggleButton
        key={pagess}
        id={`${name}-${id}`}
        type="checkbox"
        variant="outline-success"
        name={`${name}`}
        value={pagess.value}
        checked={page === pagess.value}
        onChange={(e) => setPage(e.currentTarget.value)}
      >
        {pagess.name}
      </ToggleButton>
    ))}
  </ButtonGroup>
);

export default MainButtons;

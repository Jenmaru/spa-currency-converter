import { ButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';

const MainButtons = ({ page, pages, setPage, name }) => {
    return (
        <ButtonGroup className="d-flex" style={{ marginTop: '1rem', }}>
        {pages.map((pages, idx) => (
          <ToggleButton
            key={idx}
            id={`${name}-${idx}`}
            type="checkbox"
            variant="outline-info"
            name={`${name}`}
            value={pages.value}
            checked={page === pages.value}
            onChange={(e) => setPage(e.currentTarget.value)}
          >
            {pages.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    )
};

export default MainButtons;
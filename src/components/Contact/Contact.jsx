import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { StyledContainer, DeleteButton, StyledNumber } from './Contact.Styled';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li>
      <StyledContainer>
        {contact.name}: <StyledNumber>{contact.number}</StyledNumber>
        <DeleteButton type="button" onClick={handleDelete}>
          Delete
        </DeleteButton>
      </StyledContainer>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};

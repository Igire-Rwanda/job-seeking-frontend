
import React,{useState} from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {


     
        const [modal, setModal] = useState(false);
      
        const toggleModal = () => {
          setModal(!modal);
        };
      
        if(modal) {
          document.body.classList.add('active-modal')
        } else {
          document.body.classList.remove('active-modal')
        }
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
        <button onClick={toggleModal} className="btn-modal">
        View more
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>COMPANY Profile</h2>
            <p>
            Founded in 1978 in Milan,Gianni Versace S.r.l is one 
            of the leading international fashion design houses and a symbol of Italian 
            luxury world-wide. It designs, manufactures, distributes and retails fashion
             and lifestyle products including haute couture, prèt-à-porter, accessories,
              jewellery, watches, eyewear, fragrances, and home furnishings all bearing the
               distinctive Medusa logo.
The Versace Group distributes its products through a world-wide D.O.S network which in
cludes over 200 boutiques in the principal cities and over 1500 wholesalers worldwide.
Donatella Versace has been Artistic Director of Versace since 1997 and has steered the
 brand into the 21st century. Today, Versace represents its heritage through its strong
  and fearless designs, while addressing a new global audience which continues to
   strengthen Versace’s position in contemporary culture.
In 2000 Gianni Versace S.r.l opened Palazzo Versace, the first
 hotel project to be branded by a luxury goods company, which
  provides tourists and travellers the opportunity to experience
   and enjoy the complete Versace lifestyle. The second Palazzo Versace
    built in Dubai opened in 2015. The third Palazzo Versace will be built in Macau, China.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
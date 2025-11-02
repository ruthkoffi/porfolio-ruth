// import React, { useState, } from 'react';
// import type { ChangeEvent } from 'react';
// import type { FormEvent } from 'react';


// interface ContactFormData {
//   nom: string;
//   email: string;
//   message: string;
// }

// const  Contact = () => {

//   const [formData, setFormData] = useState<ContactFormData>({
//     nom: '',
//     email: '',
//     message: ''
//   });

//   const [messageStatut, setMessageStatut] = useState<string>('');

//   // 3. Gérer les changements dans les champs de saisie
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

 
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

   
//     console.log('Données du formulaire soumises :', formData);

    
//     setMessageStatut('Message envoyé avec succès !');
//     setFormData({ nom: '', email: '', message: '' }); 
//   };
 

//     <form onSubmit={handleSubmit} className="form-contact">
//       <h2>Formulaire de Contact</h2>
//       {messageStatut && <p style={{ color: 'green' }}>{messageStatut}</p>}
      
//       <div>
//         <label htmlFor="nom">Nom :</label>
//         <input
//           type="text"
//           id="nom"
//           name="nom"
//           value={formData.nom}
//           onChange={handleChange}
//           required
//         />
//       </div>
      
//       <div>
//         <label htmlFor="email">Email :</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
      
//       <div>
//         <label htmlFor="message">Message :</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           rows={4}
//         />
//       </div>
      
//       <button type="submit">Envoyer</button>
//     </form>
  
// };


// export default Contact

import React from "react";
export default function About(props) {
  const style = {
    color: "#AF54FF",
  };
  return (
    <div>
      <h1 style={style}>About NotesCloud</h1>
      <h3>Welcome to NotesCloud!</h3>
      <p>
        NotesCloud is a modern and secure cloud-based application designed to
        help you store, manage, and access your notes from anywhere. Built with
        the powerful MERN stack (MongoDB, Express.js, React, and Node.js),
        NotesCloud provides a seamless experience for users to keep their
        thoughts and ideas organized.
      </p>
      <h2 style={style}>Features</h2>
      <h3>Secure User Authentication</h3>
      <dl>
        <dt style={style}>Sign Up:</dt> Create a new account with ease.
        <dt style={style}>Login: </dt> Secure login system to protect your data.
        <dt style={style}>Token-based Authentication: </dt>Ensures that only
        authenticated users can access their notes.
      </dl>
      <h3>Note Management</h3>
      <dl>
        <dt style={style}>Add Notes:</dt> Create new notes quickly and easily.
        <dt style={style}>Edit Notes:</dt> Update existing notes to keep
        information current.
        <dt style={style}>Delete Notes:</dt> Remove notes that are no longer
        needed.
        <dt style={style}>Search Notes:</dt> Find notes using the search
        functionality.
      </dl>
      <h3>Cloud Storage</h3>
      <dl>
        <dt style={style}>Persistent Storage:</dt> Your notes are stored
        securely in the cloud, accessible from any device.
        <dt style={style}>Real-time Sync:</dt>Any changes you make are instantly
        reflected across all your devices.
      </dl>
      <h3>User-Friendly Interface</h3>
      <dl>
        <dt style={style}>Responsive Design:</dt> Access NotesCloud on desktops,
        tablets, and smartphones.
        <dt style={style}>Intuitive UI:</dt> Designed to be easy to use, with a
        clean and modern interface.
      </dl>
      <h3>Data Security</h3>
      <dl>
        <dt style={style}>Encryption: </dt> Your notes are stored securely with
        encryption to ensure privacy.
        <dt style={style}>Secure Communication:</dt> All data transfer between
        the client and server is encrypted using HTTPS.
      </dl>
      <h3>Technologies Used</h3>
      <dl>
        <dt style={style}>MongoDB: </dt> A flexible, document-oriented database
        for efficient data storage.
        <dt style={style}>Express.js:</dt> A minimal and flexible Node.js web
        application framework for building robust APIs.
        <dt style={style}>React: </dt>A powerful JavaScript library for building
        dynamic and responsive user interfaces.
        <dt style={style}>Node.js:</dt> A scalable and efficient server
        environment to handle numerous simultaneous connections.
      </dl>
      <h3>How to Use NotesCloud</h3>
      <dl>
        <dt style={style}>Sign Up:</dt>
        <dd>
          Create a new account by providing your email and setting a password.
        </dd>
        <dt style={style}>Login:</dt>{" "}
        <dd>Access your account by logging in with your credentials.</dd>
        <dt style={style}>Add Notes:</dt> Use the "Add Note" feature to create
        new notes with titles and content.
        <dt style={style}>Manage Notes:</dt> Edit or delete notes as needed. Use
        the search bar to quickly find specific notes.
        <dt style={style}> Logout:</dt> Securely log out from your account when
        you're done.
      </dl>
      <h3>Why Choose NotesCloud?</h3>
      <dl>
        <dt style={style}>Accessibility:</dt>{" "}
        <dd>Access your notes from any device, anytime, anywhere.</dd>
        <dt style={style}>Security:</dt>{" "}
        <dd>
          Your data is safe with us, protected by industry-standard security
          measures.
        </dd>
        <dt style={style}>Ease of Use:</dt>{" "}
        <dd>
          Our intuitive interface ensures you can focus on what matters—your
          notes.
        </dd>
      </dl>
      Thank you for choosing NotesCloud as your trusted note-keeping companion.
      We are committed to providing you with the best experience and
      continuously improving our services. For any feedback or support, please
      contact us at <a href="/">support@NotesCloud.com</a>
    </div>
  );
}
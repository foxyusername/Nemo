import "../css/about.css";


function About({logo}){
 return <div className="about_main_div">
    <div className="about_navbar">{logo}</div>
    <div className="about_body">
      <div className="about_body_1">
        <h2>Welcome to Nemo Messenger</h2>
        <p>Nemo Messenger is a free chat application designed to provide a seamless communication experience with your friends. Stay connected, share memorable moments, and express yourself effortlessly through text messages, voice calls, and more. Whether you're chatting one-on-one or in a group, Nemo Messenger ensures a delightful and personalized communication experience.</p>
      </div>

      <div className="about_body_2">
      <h2>A Beautiful User Interface</h2>
      <p>Nemo Messenger boasts a stunning user interface that captivates users from the moment they launch the app. With its carefully crafted design, the app creates a visually appealing and immersive environment, making your chat experience enjoyable and engaging. The intuitive interface makes it easy to navigate and find the features you need.</p>
      </div>
    
     <div className="about_body_2">
     <h2>Powerful Functionality</h2>
     <p>Beyond its beautiful design, Nemo Messenger offers a range of powerful features to enhance your communication. Enjoy real-time messaging, voice and video calls, file sharing, group chats, and more. The app is designed to provide a seamless and reliable experience, ensuring that you can connect with your friends anytime, anywhere.</p>
     </div>

     <div className="about_body_2">
      <h2>Enhance Your Conversations</h2>
      <p>With Nemo Messenger, take your conversations to the next level. Express yourself with a wide range of emojis, stickers, and GIFs to add personality and flair to your messages. Share photos, videos, and voice recordings seamlessly, making your conversations richer and more engaging. Nemo Messenger empowers you to connect with friends on a deeper level and make every interaction memorable.</p>
     </div>

     <div className="about_body_2">
      <h2>Privacy and Security First</h2>
      <p>We prioritize the privacy and security of your conversations. Nemo Messenger employs end-to-end encryption to ensure that your messages and calls remain private and secure. Your data is protected, giving you the peace of mind to freely communicate and share within the app. With Nemo Messenger, you can chat confidently, knowing that your privacy is our utmost priority.</p>
     </div>

<div className="about_body_2">
  <h2>Stay Connected Anytime, Anywhere</h2>
  <p>With Nemo Messenger, distance is no longer a barrier to connection. Our app is built to keep you connected with your loved ones, no matter where you are in the world. Whether you're traveling, exploring new horizons, or simply relaxing at home, Nemo Messenger ensures that your friends are just a message away. Stay connected, share experiences, and bridge the gap with effortless communication.</p>
</div>

     <div className="about_body_2">
     <h2 id="last_title">Developed by Nika Jamaspishvili</h2>
     <p id="last_text">Nemo Messenger is the brainchild of Nika Jamaspishvili, a talented developer with a passion for creating intuitive and visually appealing applications. Nika's goal is to provide innovative solutions that enhance the way people connect and communicate. With Nemo Messenger, you can trust that you're using a high-quality chat application developed by a skilled professional.</p>
     </div>

    </div>
</div>
}

export default About;
import React, { useState } from 'react';
import './FilterBooks.css';

const allBooks = [
    {
      id: 1,
      title: "From the Desk of Zoey Washington",
      author: "Janae Marks",
      isbn: "9780062875853",
      summary: "Zoe Washington isn’t sure what to write. What does a girl say to the father she’s never met, hadn’t heard from until his letter arrived on her twelfth birthday, and who’s been in prison for a terrible crime? A crime he says he never committed. Could Marcus really be innocent? Zoe is determined to uncover the truth. Even if it means hiding his letters and her investigation from the rest of her family. Everyone else thinks Zoe’s worrying about doing a good job at her bakery internship and proving to her parents that she’s worthy of auditioning for Food Network’s Kids Bake Challenge. But with bakery confections on one part of her mind, and Marcus’s conviction weighing heavily on the other, this is one recipe Zoe doesn’t know how to balance. The only thing she knows to be true: Everyone lies.",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560957404i/45169415.jpg", 
      ageRange: "Middle Grade",
      genre: "Realistic Fiction",
      diversity: {
        blackAuthor: true,
        asianAuthor: false,
        palestinianAuthor: false,
        disabledAuthor: false,
        womenAuthor: true,
        nativeAuthor: false,
        latinxAuthor: false
      }
    },
    {
      id: 2,
      title: "Chasing Space Young Readers' Edition",
      author: "Leland Melvin",
      genre: "Non-Fiction",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1514397926i/36099680.jpg",
      summary: "Meet Leland Melvin—football star, NASA astronaut, and professional dream chaser. Bill Nye the Science Guy says: “Leland’s story moves fast; once you get started you’ll want to join the chase.” In this inspiring memoir, adapted from the simultaneous version for adults, young readers will get to learn about Leland Melvin’s remarkable life story, from being drafted by the Detroit Lions to bravely orbiting our planet in the International Space Station to writing songs with will.i.am, working with Serena Williams, and starring in top-rated television shows like The Dog Whisperer, Top Chef, and Child Genius. With do-it-yourself experiments in the back of the book and sixteen pages of striking full-color photographs, this is the perfect book to inspire young readers. When the former Detroit Lion’s football career was cut short by an injury, Leland didn’t waste time mourning his broken dream. Instead, he found a new one—something that was completely out of this world. He joined NASA, braved an injury that nearly left him permanently deaf, and still managed to muster the courage and resolve to travel to space on the shuttle Atlantis to help build the International Space Station. Leland’s problem-solving methods and can-do attitude turned his impossible-seeming dream into reality. Leland’s story introduces readers to the fascinating creative and scientific challenges he had to deal with in space and will encourage the next generation of can-do scientists to dare to follow their dreams.",
      ageRange: "Middle Grade",
      isbn: "9780062665935",
      diversity: {
        blackAuthor: true,
        asianAuthor: false,
        palestinianAuthor: false,
        disabledAuthor: false,
        womenAuthor: false,
        nativeAuthor: false,
        latinxAuthor: false
      }
    },
    {
        id: 3,
        title: "Homeland: My Father Dreams of Palestine",
        author: "Hannah Moushabeck",
        genre: "Non-Fiction",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663134997i/61729218.jpg",
        summary: "As bedtime approaches, three young girls eagerly await the return of their father who tells them stories of a faraway homeland—Palestine. Through their father's memories, the Old City of Jerusalem comes to the sounds of juice vendors beating rhythms with brass cups, the smell of argileh drifting through windows, and the sight of doves flapping their wings toward home. These daughters of the diaspora feel love for a place they have never been, a home they cannot visit. But, as their father’s story comes to an end, they know that through his memories, they will always return. A Palestinian family celebrates the stories of their homeland in this moving autobiographical picture book debut by Hannah Moushabeck. With heartfelt illustrations by Reem Madooh, this story is a love letter to home, to family, and to the persisting hope of people that transcends borders.",
        ageRange: "Picture Books",
        isbn: "9781797225906",
        diversity: {
          blackAuthor: false,
          asianAuthor: false,
          palestinianAuthor: true,
          disabledAuthor: false,
          womenAuthor: true,
          nativeAuthor: false,
          latinxAuthor: false
        }
      },
      {
        id: 4,
        title: "Growing Up Autistic and Happy: A Perfectly Weird Guide to Being Perfectly You",
        author: "Camilla Pang",
        genre: "Non-Fiction",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697718286i/197163545.jpg",
        summary: "As a child, Camilla loved patterns and putting things in order. She was obsessed with Stephen Hawking, and the only language she really understood was science. Diagnosed with autism aged 8, Camilla saw the world very differently.But with science as her sidekick, she was able to translate ideas she could understand, such as photosynthesis and algorithms, onto things she couldn't, such as dealing with emotions and finding your voice. In this unique and brilliant book, Camilla shares her scientific survival guide to growing up, helping neurodiverse young readers navigate the world around them, giving them the courage to grow up perfectly happy in who they are.",
        ageRange: "Middle Grade",
        isbn: "9781526366719",
        diversity: {
          blackAuthor: false,
          asianAuthor: true,
          palestinianAuthor: true,
          disabledAuthor: true,
          womenAuthor: true,
          nativeAuthor: false,
          latinxAuthor: false
        }
      },
      {
        id: 5,
        title: "How to Speak Spanglish",
        author: "Mónica Mancillas",
        genre: "Family",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685351492i/63876571.jpg",
        summary: "In this charming and delightful picture book, Sami shares the joys of Spanglish with his skeptical abuela and diverse community. Sami loves to speak both English and Spanish. But he doesn't just speak them one at a time. He speaks in Spanglish! Sometimes, he makes brand-new words -- like lonche -- and sometimes, he puts the languages together in one sentence, like when he's hungry for jambuergers con papas fritas. But not everyone likes Spanglish. Abuela thinks that Spanish should be spoken at home and English at school. And to make matters more complicated, Sami's not allowed to write his homework in Spanglish. At first, Sami feels confused and frustrated. But with the support of his family, friends, and neighbors, Sami soon realizes that his unique identity should be celebrated. Hooray, muy bien, Sami!",
        ageRange: "Picture Books",
        isbn: "9780593521809",
        diversity: {
          blackAuthor: false,
          asianAuthor: false,
          palestinianAuthor: false,
          disabledAuthor: false,
          womenAuthor: true,
          nativeAuthor: false,
          latinxAuthor: true
        }
      },
      {
        id: 6,
        title: "Shin-chi's Canoe",
        author: "Nicola I. Campbell",
        genre: "Historical Fiction",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328770806i/3160821.jpg",
        summary: "When they arrive at school, Shi-shi-etko reminds Shinchi, her six-year-old brother, that they can only use their English names and that they can't speak to each other. For Shinchi, life becomes an endless cycle of church mass, school, and work, punctuated by skimpy meals. He finds solace at the river, clutching a tiny cedar canoe, a gift from his father, and dreaming of the day when the salmon return to the river — a sign that it’s almost time to return home. This poignant story about a devastating chapter in First Nations history is told at a child’s level of understanding.",
        ageRange: "Picture Books",
        isbn: "9780888998576",
        diversity: {
          blackAuthor: false,
          asianAuthor: false,
          palestinianAuthor: false,
          disabledAuthor: false,
          womenAuthor: true,
          nativeAuthor: true,
          latinxAuthor: false
        }
      },
      {
        id: 7,
        title: "Tristan Strong Punches a Hole in the Sky",
        author: "Kwame Mbalia",
        genre: "Fantasy",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1549350938i/39884337.jpg",
        summary: "Seventh-grader Tristan Strong feels anything but strong ever since he failed to save his best friend when they were in a bus accident together. All he has left of Eddie is the journal his friend wrote stories in. Tristan is dreading the month he’s going to spend on his grandparents’ farm in Alabama, where he’s being sent to heal from the tragedy. But on his first night there, a sticky creature shows up in his bedroom and steals Eddie’s journal. Tristan chases after it — is that a doll? — and a tug-of-war ensues between them underneath a Bottle Tree. In a last attempt to wrestle the journal out of the creature’s hands, Tristan punches the tree, accidentally ripping open a chasm into the MidPass, a volatile place with a burning sea, haunted bone ships, and iron monsters that are hunting the inhabitants of this world. Tristan finds himself in the middle of a battle that has left black American gods John Henry and Brer Rabbit exhausted. In order to get back home, Tristan and these new allies will need to entice the god Anansi, the Weaver, to come out of hiding and seal the hole in the sky. But bartering with the trickster Anansi always comes at a price. Can Tristan save this world before he loses more of the things he loves?",
        ageRange: "Middle Grade",
        isbn: "9781368039932",
        diversity: {
          blackAuthor: true,
          asianAuthor: false,
          palestinianAuthor: false,
          disabledAuthor: false,
          womenAuthor: true,
          nativeAuthor: false,
          latinxAuthor: false
        }
      },
      {
        id: 8,
        title: "Freewater",
        author: "Kwame Mbalia",
        genre: "Historical Fiction",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677192273i/58275990.jpg",
        summary: "A middle-grade novel about two enslaved children’s escape from a plantation and the many ways they find freedom. Under the cover of night, twelve-year-old Homer flees Southerland Plantation with his little sister Ada, unwillingly leaving their beloved mother behind. Much as he adores her and fears for her life, Homer knows there’s no turning back, not with the overseer on their trail. Through tangled vines, secret doorways, and over a sky bridge, the two find a secret community called Freewater, deep in the swamp. In this society created by formerly enslaved people and some freeborn children, Homer finds new friends, almost forgetting where he came from. But when he learns of a threat that could destroy Freewater, he crafts a plan to find his mother and help his new home.",
        ageRange: "Middle Grade",
        isbn: "9780316056618",
        diversity: {
          blackAuthor: true,
          asianAuthor: false,
          palestinianAuthor: false,
          disabledAuthor: false,
          womenAuthor: true,
          nativeAuthor: false,
          latinxAuthor: false
        }
      },
  ];
  

  const FilterBooks = () => {
    const [genre, setGenre] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(allBooks);
  
    const handleFilterChange = (e) => {
      setGenre(e.target.value);
      filterBooks(e.target.value);
    };
  
    const filterBooks = (newGenre) => {
      const filtered = allBooks.filter((book) => book.genre.includes(newGenre));
      setFilteredBooks(filtered);
    };
  
    const renderBadge = (label) => (
      <span style={{
        backgroundColor: '#f0a500',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '15px',
        marginRight: '5px',
        marginBottom: '5px',
        display: 'inline-block',
      }}>
        {label}
      </span>
    );
  
    return (
        <div className="filter-books-container">
        <select onChange={handleFilterChange} value={genre} className="genre-select">
          <option value="">Select Genre</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Family">Family</option>
          <option value="Realistic Fiction">Realistic Fiction</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.cover} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <div className="badges-container">
                {book.diversity.blackAuthor && renderBadge('Black Author')}
                {book.diversity.womenAuthor && renderBadge('Women Author')}
                {book.diversity.palestinianAuthor && renderBadge('Palestinian Author')}
                {book.diversity.asianAuthor && renderBadge('Asian Author')}
                {book.diversity.nativeAuthor && renderBadge('Native American Author')}
                {book.diversity.disabledAuthor && renderBadge('Disabled Author')}
                {book.diversity.latinxAuthor && renderBadge('Latinx Author')}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FilterBooks;
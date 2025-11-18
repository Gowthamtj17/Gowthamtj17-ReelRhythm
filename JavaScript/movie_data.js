// ================= Movies Database =================
const movies = [
    {
        title: "Captain Miller",
        image: "https://img.youtube.com/vi/bSkOF-mEbUU/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.7,
        link: "https://www.youtube.com/embed/bSkOF-mEbUU",
        description: "Dhanush leads in 'Captain Miller', an action-packed film directed by Arun Matheswaran. The teaser promises high-octane sequences and intense drama."
    },


    {
        title: "Shadow Force",
        image: "https://img.youtube.com/vi/M7LhGytiHFM/maxresdefault.jpg",
        category: "action",
        language: "english",
        type: "movie",
        year: 2025,
        rating: 4.4,
        link: "https://www.youtube.com/embed/M7LhGytiHFM",
        description: "A team of elite operatives is tasked with taking down a global criminal syndicate. As they delve deeper into the underworld, they uncover a conspiracy that threatens international security."
    },
    {
        title: "Paatal Lok Season 2",
        image: "https://img.youtube.com/vi/RyzVgy8JteA/maxresdefault.jpg",
        category: "web_series",
        language: "hindi",
        type:  "movie",
        year: 2025,
        rating: 4.5,
        link: "https://www.youtube.com/embed/RyzVgy8JteA",
        description: "The much-anticipated second season of the dark crime anthology. Following the moral and societal decay, a disillusioned cop delves into a conspiracy far darker than the crimes he investigates. Deeply atmospheric and biting in its critique, the show explores power, justice, and corruption in a fractured society, with haunting visuals and morally complex characters."
    },
    {
        title: "Criminal Justice: A Family Matter (Season 4)",
        image: "https://img.youtube.com/vi/98pKCUl4ljM/maxresdefault.jpg",
        category: "web_series",
        language: "hindi",
        type: "movie",
        year: 2025,
        rating: 4.4,
        link: "https://www.youtube.com/embed/98pKCUl4ljM",
        description: "This season returns to explore how personal and societal morals collide in the courtroom. When a case involving a powerful family and a nurse accused of murder unravels, the team grapples with media scrutiny, personal loss, and ethical dilemmas. Intense performances and sharp dialogue mark a strong return for this franchise."
    },
   
    {
        title: "The Institute",
        image: "https://img.youtube.com/vi/1BcvAdfyL5Y/maxresdefault.jpg",
        category: "web_series",
        language: "english",
        type:  "movie",
        year: 2025,
        rating: 4.5,
        link: "https://www.youtube.com/embed/1BcvAdfyL5Y",
        description: "A 12-year-old genius is kidnapped and wakes up in a sinister institute where children with unique abilities are experimented on. As he uncovers the dark secrets, he must find a way to escape before becoming a permanent subject."
    },
    {
        title: "KHADPANCH",
        image: "https://img.youtube.com/vi/wXKO0ihKloc/maxresdefault.jpg",
        category: "web_series",
        language: "hindi",
        type:  "movie",
        year: 2025,
        rating: 4.3,
        link: "https://www.youtube.com/embed/wXKO0ihKloc",
        description: "A gripping crime drama that delves into the complexities of relationships and the consequences of betrayal. The series explores the thin line between love and hate, loyalty and deception."
    },
    {
        title: "Love Next Door",
        image: "https://img.youtube.com/vi/PRI6js0L5So/maxresdefault.jpg",
        category: "web_series",
        language: "telugu",
        type:  "movie",
        year: 2025,
        rating: 4.2,
        link: "https://www.youtube.com/embed/PRI6js0L5So",
        description: "A heartwarming tale of two neighbors who start as strangers and gradually develop a deep bond. The series beautifully captures the nuances of love, friendship, and the unexpected connections that life brings."
    },
    
    {
        title: "KINGDOM",
        image: "https://img.youtube.com/vi/BYvSLN3rk9g/maxresdefault.jpg",
        category: "historical_drama",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.7,
        link: "https://www.youtube.com/embed/BYvSLN3rk9g",
        description: "Starring Vijay Deverakonda and Satya Dev, 'KINGDOM' is a historical drama that delves into the complexities of power and legacy. Directed by Gowtam Tinnanuri, the film's trailer offers a glimpse into a world of royal intrigue and warfare. With music by Anirudh, the film aims to captivate audiences with its grandeur and emotional depth."
    },
    {
        title: "Vettaiyan",
        image: "https://img.youtube.com/vi/Qhn9IspsP3s/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2024,
        rating: 4.6,
        link: "https://www.youtube.com/embed/Qhn9IspsP3s",
        description: "Rajinikanth stars in 'Vettaiyan', an action-packed thriller produced by Lyca Productions. Directed by T.J. Gnanavel, the film's trailer teases a tale of vengeance and justice. With high-octane action sequences and a compelling narrative, 'Vettaiyan' is set to be a visual treat for fans."
    },

    {
        title: "Thug Life",
        image: "https://img.youtube.com/vi/96kAbj3IF3k/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.7,
        link: "https://www.youtube.com/embed/96kAbj3IF3k",
        description: "Kamal Haasan teams up with Mani Ratnam in this high-octane thriller. With a gripping storyline and intense action sequences, 'Thug Life' is set to captivate audiences. Themes of justice, loyalty, and revenge are central. The film delivers suspense and emotional resonance in equal measure."
    },
    {
        title: "RAAYAN",
        image: "https://img.youtube.com/vi/qQJJWhh-XRo/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.7,
        link: "https://www.youtube.com/embed/qQJJWhh-XRo",
        description: "Dhanush takes the director's chair for 'RAAYAN', an action-packed drama featuring A.R. Rahman's music. The trailer teases a gripping narrative with intense performances and high-stakes action sequences. Produced by Sun Pictures, the film aims to captivate audiences with its compelling storyline."
    },
    {
        title: "Shakthi Thirumagan",
        image: "https://img.youtube.com/vi/YXfItj2Xy9M/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.6,
        link: "https://www.youtube.com/embed/YXfItj2Xy9M",
        description: "Vijay Antony stars in 'Shakthi Thirumagan', an action thriller that promises intense fight sequences and a gripping storyline. Directed by Arun, the trailer showcases high-octane action and suspense, setting high expectations for the film's release."
    },
    {
        title: "JAILER 2",
        image: "https://img.youtube.com/vi/aaNq2NL6D4A/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.7,
        link: "https://www.youtube.com/embed/aaNq2NL6D4A",
        description: "The much-anticipated sequel, 'JAILER 2', brings back Superstar Rajinikanth in a high-octane action-packed narrative. Directed by Nelson and featuring music by Anirudh, the trailer teases intense sequences and a gripping storyline, setting high expectations for fans."
    },
    {
        title: "Vidaamuyarchi",
        image: "https://img.youtube.com/vi/hsoGpoDxyKg/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.5,
        link: "https://www.youtube.com/embed/hsoGpoDxyKg",
        description: "Ajith Kumar returns in 'Vidaamuyarchi', an action drama directed by Magizh Thirumeni. The trailer showcases intense action sequences and a compelling storyline, promising an engaging cinematic experience for the audience."
    },

    {
        title: "Indian 2",
        image: "https://img.youtube.com/vi/3bvBUT5pQYY/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.8,
        link: "https://www.youtube.com/embed/3bvBUT5pQYY",
        description: "Kamal Haasan returns in 'Indian 2', a high-octane action thriller directed by Shankar. The trailer showcases intense action sequences and a gripping storyline, setting high expectations for the film's release."
    },

    {
        title: "Good Bad Ugly",
        image: "https://img.youtube.com/vi/c9zWcnNR2q0/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.7,
        link: "https://www.youtube.com/embed/c9zWcnNR2q0",
        description: "Ajith Kumar stars in 'Good Bad Ugly', an action thriller that promises intense sequences and a gripping storyline. The trailer teases high-octane action and suspense, setting high expectations for the film's release."
    },
    {
        title: "Phoenix",
        image: "https://img.youtube.com/vi/P1BMIo38Tu0/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.6,
        link: "https://www.youtube.com/embed/P1BMIo38Tu0",
        description: "Surya leads in 'Phoenix', an action drama that promises intense sequences and a compelling storyline. Directed by Anl Arasu Master, the trailer showcases high-octane action and suspense, setting high expectations for the film's release."
    },
    {
        title: "Kanguva",
        image: "https://img.youtube.com/vi/xSscSx-xejA/maxresdefault.jpg",
        category: "historical_drama",
        language: "tamil",
        type: "movie",
        year: 2024,
        rating: 4.7,
        link: "https://www.youtube.com/embed/xSscSx-xejA",
        description: "Suriya leads in 'Kanguva', an action fantasy film that promises intense sequences and a compelling storyline. Directed by Siva, the trailer showcases high-octane action and suspense, setting high expectations for the film's release."
    },
    {
        title: "Friends",
        image: "https://img.youtube.com/vi/uxzPAIH-vJg/maxresdefault.jpg",
        category: "comedy_drama",
        language: "tamil",
        type: "movie",
        year: 2001,
        rating: 4.3,
        link: "https://www.youtube.com/embed/uxzPAIH-vJg",
        description: "Friends is a heartwarming comedy-drama centered on the strong bond between three inseparable friends, exploring the highs and lows of their lives. Suriya plays one of the central characters, showcasing his natural charm and ability to handle both comedy and emotion with ease. The film examines themes of friendship, loyalty, love, and the challenges that test human bonds. The official trailer captures the film's essence, highlighting its emotional depth and engaging storyline."
    }

    ,
    {
        title: "Mounam Pesiyadhe",
        image: "https://img.youtube.com/vi/HGpntW_p87w/maxresdefault.jpg",
        category: "romantic_drama",
        language: "tamil",
        type: "movie",
        year: 2002,
        rating: 4.4,
        link: "https://www.youtube.com/embed/HGpntW_p87w?si=3JvhwkLAa0sbZ-L_",
        description: "Mounam Pesiyadhe is a romantic drama that explores unspoken love and complex relationships. Suriya delivers a subtle and powerful performance as a man caught between friendship and unexpected love. Trisha plays his co-star, bringing charm and depth to the film’s narrative. Yuvan Shankar Raja’s soulful music enhances the emotional weight of the story, making it unforgettable."
    },
    {
        title: "Aaru",
        image: "https://img.youtube.com/vi/Y9BqabykmQg/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2005,
        rating: 4.2,
        link: "https://www.youtube.com/embed/Y9BqabykmQg",
        description: "Aaru is a high-octane action thriller directed by Hari, with Suriya in the lead as Aarumugam, a fiercely loyal enforcer for a gangster. The plot navigates themes of betrayal, vengeance, and complex loyalties when his pastime of retaliation is brutally tested. Known for its raw energy and intense emotional stakes, the film combines violent confrontations with heartfelt moments. Since an official trailer isn’t available, this entry features the song 'Soda Bottle', whose vibrant tone reflects the movie’s edgy narrative.:contentReference[oaicite:0]{index=0}"
    },
    {
        title: "Aadhavan",
        image: "https://img.youtube.com/vi/hQlD1dTru6g/hqdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2009,
        rating: 4.1,
        link: "https://www.youtube.com/embed/hQlD1dTru6g",
        description: "Aadhavan is an action-comedy directed by K.S. Ravikumar, featuring Suriya as a witty assassin with a secret mission. He infiltrates a judge’s household under disguise, leading to humorous yet high-stakes situations. His chemistry with Nayanthara brings both charm and emotional depth to the narrative. Harris Jayaraj’s energetic soundtrack and a lively screenplay make it a clean, entertaining masala film. The trailer captures the film’s blend of comedy, suspense, and romance perfectly."
    },
    {
        title: "Ayan",
        image: "https://img.youtube.com/vi/AEE6URGLinc/hqdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2009,
        rating: 4.7,
        link: "https://www.youtube.com/embed/AEE6URGLinc",
        description: "Ayan is a stylish action-thriller directed by K.V. Anand and produced under the AVM banner. Suriya portrays Deva, a fearless smuggler navigating a dangerous world of contraband, betrayal, and loyalty. The movie combines fast-paced stunts, international locales—including Namibia and Zanzibar—and a gripping narrative about duty versus friendship. Harris Jayaraj’s pulsating soundtrack elevates the intense visuals and emotional arcs throughout."
    },
    {
        title: "Kaakha Kaakha",
        image: "https://img.youtube.com/vi/My0urTDTtkw/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2003,
        rating: 4.7,
        link: "https://www.youtube.com/embed/My0urTDTtkw",
        description: "Kaakha Kaakha is a gripping action-thriller directed by Gautham Vasudev Menon. Suriya plays Anbuselvan, an upright cop from the encounter squad who battles dangerous criminals while struggling with personal tragedy. The film is known for its realistic portrayal of police life and the price of duty. Romance with Jyothika’s character adds depth, balancing action with emotion."
    },
    {
        title: "Nerukku Ner",
        image: "https://img.youtube.com/vi/p-DdhemMD3o/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 1997,
        rating: 4.2,
        link: "https://www.youtube.com/embed/p-DdhemMD3o",
        description: "Nerukku Ner marks Suriya’s debut alongside Vijay in a youthful romantic action drama. The story deals with misunderstandings between couples that escalate into larger conflicts. While no official trailer exists, the song 'Engengae Engengae' captures the film’s energetic and vibrant mood. This film introduced Suriya’s screen presence and gave him his first taste of stardom."
    },
    {
        title: "Kaadhale Nimmadhi",
        image: "https://img.youtube.com/vi/GdWB7-07ykQ/hqdefault.jpg",
        category: "romantic_drama",
        language: "tamil",
        type: "movie",
        year: 1998,
        rating: 4.0,
        link: "https://www.youtube.com/embed/GdWB7-07ykQ",
        description: "Kaadhale Nimmadhi is an emotional romantic drama featuring Suriya in one of his early career roles. The movie explores themes of love, trust, and the misunderstandings that threaten relationships. Without an official trailer, the song 'Gangai Nadhiye' stands out as a representation of the film’s gentle and romantic tone. It remains a memorable milestone in Suriya’s initial filmography."
    },
    {
        title: "Sillunu Oru Kaadhal",
        image: "https://img.youtube.com/vi/Duv8y2dYqBA/hqdefault.jpg",
        category: "romantic_drama",
        language: "tamil",
        type: "movie",
        year: 2006,
        rating: 4.3,
        link: "https://www.youtube.com/embed/Duv8y2dYqBA",
        description: "Sillunu Oru Kaadhal is a poignant love story directed by Krishna, starring Suriya, Jyothika, and Bhumika. The film explores the struggles of married life when past relationships resurface unexpectedly. Suriya portrays a devoted husband caught between love, sacrifice, and duty. With A.R. Rahman’s magical music, the film continues to be celebrated for its emotional depth and realism."
    },
    {
        title: "Pithamagan",
        image: "https://img.youtube.com/vi/ukyH2ugSIZY/maxresdefault.jpg",
        category: "drama",
        language: "tamil",
        type: "movie",
        year: 2003,
        rating: 4.6,
        link: "https://www.youtube.com/embed/ukyH2ugSIZY",
        description: "Pithamagan, directed by Bala, is a powerful drama exploring human loneliness and unconventional friendships. While Vikram plays the lead, Suriya shines as Sakthi, a witty conman whose friendship brings color to an otherwise dark tale. The movie’s raw portrayal of emotions earned critical acclaim. Since no trailer is available, the soulful song 'Aruna Runam' captures the intensity of the narrative."
    },
    {
        title: "Singam",
        image: "https://img.youtube.com/vi/96CgGu1JYbY/hqdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2010,
        rating: 4.5,
        link: "https://www.youtube.com/embed/96CgGu1JYbY",
        description: "'Singam' introduces Suriya as Durai Singam, a no-nonsense cop battling intense criminal networks. Directed by Hari, the trailer oozes high-voltage action and charisma.:contentReference[oaicite:0]{index=0}"
    },
    {
        title: "Singam 3",
        image: "https://img.youtube.com/vi/1klDq2zaols/hqdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2017,
        rating: 4.4,
        link: "https://www.youtube.com/embed/1klDq2zaols",
        description: "As the third installment in the Singam series, 'Si3' sees Suriya return as Duraisingam facing a dangerous toxic crime ring. The trailer delivers familiar franchise punch and cinematic energy.:contentReference[oaicite:1]{index=1}"
    },
    {
        title: "Ghajini",
        image: "https://img.youtube.com/vi/tlvrGfHbPsw/maxresdefault.jpg",
        category: "psychological_thriller",
        language: "tamil",
        type: "movie",
        year: 2005,
        rating: 4.7,
        link: "https://www.youtube.com/embed/tlvrGfHbPsw",
        description: "In 'Ghajini', Suriya portrays a businessman suffering from short-term memory loss, on a quest for avenging his girlfriend’s murder. The intense trailer gave strong glimpses of visceral emotion and striking visuals.:contentReference[oaicite:2]{index=2}"
    }, {
        title: "Soorarai Pottru",
        image: "https://img.youtube.com/vi/fa_DIwRsa9o/maxresdefault.jpg",
        category: "documentary",
        language: "tamil",
        type: "movie",
        year: 2020,
        rating: 4.9,
        link: "https://www.youtube.com/embed/fa_DIwRsa9o",
        description: "Inspired by G. R. Gopinath's life, 'Soorarai Pottru' follows an ambitious man’s dream of launching an affordable airline. Suriya delivers an emotional and compelling performance under Sudha Kongara’s direction. Co-produced by him under 2D Entertainment."
    },
    {
        title: "Kaappaan",
        image: "https://img.youtube.com/vi/j_eduSGN3RQ/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2019,
        rating: 4.5,
        link: "https://www.youtube.com/embed/j_eduSGN3RQ",
        description: "In 'Kaappaan', Suriya plays an elite SPG officer tasked with protecting the Prime Minister. Directed by K. V. Anand, the trailer pulsates with high-stakes espionage and political intrigue.:contentReference[oaicite:1]{index=1}"
    },
    {
        title: "Etharkkum Thunindhavan",
        image: "https://img.youtube.com/vi/cKrz-kWoaSI/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2022,
        rating: 4.6,
        link: "https://www.youtube.com/embed/cKrz-kWoaSI",
        description: "Suriya headlines 'Etharkkum Thunindhavan' as a lawyer who turns vigilante to protect the vulnerable. The intense trailer teases a powerful and morally complex narrative.:contentReference[oaicite:2]{index=2}"
    },
    {
        title: "Then Chennai",
        image: "https://img.youtube.com/vi/ckhFDFN9uYQ/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2024,
        rating: 4.6,
        link: "https://www.youtube.com/embed/ckhFDFN9uYQ",
        description: "Starring Ranga and Nitin Mehta, 'Then Chennai' is an action thriller that delves into the complexities of power and legacy. The trailer offers a glimpse into a world of royal intrigue and warfare, setting high expectations for the audience."
    },
     {
        title: "Coolie",
        image: "https://img.youtube.com/vi/qeVfT2iLiu0/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.8,
        link: "https://www.youtube.com/embed/qeVfT2iLiu0",
        description: "Superstar Rajinikanth returns in 'Coolie', a high-octane action thriller directed by Lokesh Kanagaraj. The film promises intense fight sequences, a gripping storyline, and a stellar performance by Rajinikanth. Produced by Sun Pictures, the trailer showcases a blend of suspense and drama, setting high expectations for the audience."
    },


    {
        title: "Kaantha",
        image: "https://img.youtube.com/vi/Um5ttDB1VYA/maxresdefault.jpg",
        category: "drama",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.5,
        link: "https://www.youtube.com/embed/Um5ttDB1VYA",
        description: "Dulquer Salmaan stars in this emotional drama directed by Selvamani Selvaraj. The trailer showcases a heartfelt narrative exploring complex human emotions."
    },
    
    {
        title: "Anbarivu",
        image: "https://img.youtube.com/vi/4IBzVr8jCDI/maxresdefault.jpg",
        category: "action",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.4,
        link: "https://www.youtube.com/embed/4IBzVr8jCDI",
        description: "Ajith Kumar stars in 'Anbarivu', an action-packed drama that showcases the journey of separated twins brought together by fate."
    },
    {
        title: "Thalaivan Thalaivii",
        image: "https://img.youtube.com/vi/BjBaObVVX3s/maxresdefault.jpg",
        category: "drama",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.8,
        link: "https://www.youtube.com/embed/BjBaObVVX3s",
        description: "Vijay Sethupathi portrays a legendary figure in 'Thalaivan Thalaivii', a biographical drama that delves into the life and struggles of a political icon."
    },
    {
        title: "Udanpirappe",
        image: "https://img.youtube.com/vi/Luhzp1435sI/maxresdefault.jpg",
        category: "drama",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.3,
        link: "https://www.youtube.com/embed/Luhzp1435sI",
        description: "Jyotika and Sasikumar lead in 'Udanpirappe', a heartwarming family drama that explores the bonds of sibling love and sacrifice."
    },

    {
        title: "Vaazhai",
        image: "https://img.youtube.com/vi/-NEVvOEPubA/maxresdefault.jpg",
        category: "drama",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.6,
        link: "https://www.youtube.com/embed/-NEVvOEPubA",
        description: "Kalaiyarasan and Nikhila Vimal star in 'Vaazhai', a poignant drama that delves into the lives of individuals facing societal challenges."
    },

    {
        title: "O2",
        image: "https://img.youtube.com/vi/YEcWsEOsIQs/maxresdefault.jpg",
        category: "thriller",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.7,
        link: "https://www.youtube.com/embed/YEcWsEOsIQs",
        description: "Nayanthara stars in 'O2', a thrilling film that explores the lengths a mother will go to protect her child."
    },
    {
        title: "Viduthalai Part 1",
        image: "https://img.youtube.com/vi/GYeSfq_bj_M/maxresdefault.jpg",
        category: "crime_drama",
        language: "tamil",
        type: "movie",
        year: 2023,
        rating: 4.8,
        link: "https://www.youtube.com/embed/GYeSfq_bj_M",
        description: "Set in 1987, 'Viduthalai Part 1' follows Constable Kumaresan, who is recruited to arrest a separatist leader. As he delves deeper, he faces moral dilemmas that challenge his sense of duty and justice. Vetri Maaran's direction brings a raw and gripping narrative to life. The film features stellar performances by Vijay Sethupathi, Soori, and Bhavani Sre, complemented by Ilaiyaraaja's evocative music."
    },
    {
        title: "Viduthalai Part 2",
        image: "https://img.youtube.com/vi/HOxXrrwa_8o/maxresdefault.jpg",
        category: "crime_drama",
        language: "tamil",
        type: "movie",
        year: 2025,
        rating: 4.6,
        link: "https://www.youtube.com/embed/HOxXrrwa_8o",
        description: "Vijay Sethupathi and Soori return in 'Viduthalai Part 2', a compelling drama that continues the story of resistance and struggle."
    },
    {
        title: "The Shawshank Redemption",
        image: "https://img.youtube.com/vi/6hB3S9bIaco/hqdefault.jpg",
        category: "drama",
        language: "english",
        type: "movie",
        year: 1994,
        rating: 4.65, // 9.3 / 2
        link: "https://www.youtube.com/embed/6hB3S9bIaco",
        description: "A banker is wrongfully imprisoned for his wife’s murder and must endure the brutal realities of Shawshank Prison. Over decades, he forms a deep bond with fellow inmate Red and develops a plan for freedom. The story explores hope, resilience, and the human spirit against injustice. The trailer captures the emotional depth, suspense, and iconic moments that make this a timeless classic."
    },
    {
        title: "The Godfather",
        image: "https://img.youtube.com/vi/sY1S34973zA/maxresdefault.jpg",
        category: "crime_drama",
        language: "english",
        type: "movie",
        year: 1972,
        rating: 4.6, // 9.2 / 2
        link: "https://www.youtube.com/embed/sY1S34973zA",
        description: "The aging patriarch of a powerful crime family transfers control of his empire to his reluctant son Michael. The film explores power, loyalty, betrayal, and family honor in the Mafia underworld. Sincere performances, iconic dialogues, and brilliant direction make it an all-time classic. The trailer highlights the tension, drama, and strategic intrigue central to this epic saga."
    },
    {
        title: "The Dark Knight",
        image: "https://img.youtube.com/vi/EXeTwQWrcwY/maxresdefault.jpg",
        category: "action",
        language: "english",
        type: "movie",
        year: 2008,
        rating: 4.5, // 9.0 / 2
        link: "https://www.youtube.com/embed/EXeTwQWrcwY",
        description: "Batman faces his greatest challenge when the anarchic Joker terrorizes Gotham City. The film explores morality, chaos, and the nature of heroism in a complex urban landscape. Christian Bale delivers a brooding performance, while Heath Ledger's Joker became legendary. The trailer perfectly sets up the film’s intense action sequences, psychological tension, and high stakes."
    },
    {
        title: "Pulp Fiction",
        image: "https://img.youtube.com/vi/s7EdQ4FqbhY/maxresdefault.jpg",
        category: "crime_drama",
        language: "english",
        type: "movie",
        year: 1994,
        rating: 4.45, // 8.9 / 2
        link: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        description: "A series of interconnected stories of crime, redemption, and fate unfold in Los Angeles. This Quentin Tarantino classic features hitmen, a boxer, and other colorful characters. It blends dark humor, tension, and non-linear storytelling masterfully. The trailer showcases the witty dialogues, violence, and intertwining plotlines that define this cult favorite."
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        image: "https://img.youtube.com/vi/r5X-hFf6Bwo/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2003,
        rating: 4.45, // 8.9 / 2
        link: "https://www.youtube.com/embed/r5X-hFf6Bwo",
        description: "The epic conclusion to the Lord of the Rings trilogy where the Fellowship battles Sauron's forces while Frodo and Sam journey to destroy the One Ring. Themes of courage, sacrifice, and friendship are central. Peter Jackson’s direction brings breathtaking visuals and emotional depth. The trailer captures the grandeur, adventure, and tension of this iconic fantasy saga."
    },
    {
        title: "Forrest Gump",
        image: "https://img.youtube.com/vi/bLvqoHBptjg/maxresdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 1994,
        rating: 4.4, // 8.8 / 2
        link: "https://www.youtube.com/embed/bLvqoHBptjg",
        description: "The story of Forrest Gump, a man with a low IQ but a kind heart, who inadvertently influences major historical events in America. Themes of love, destiny, and perseverance are woven throughout. Tom Hanks delivers a legendary performance. The trailer highlights his life journey, emotional highs and lows, and the heartwarming narrative that resonates across generations."
    },
    {
        title: "Inception",
        image: "https://img.youtube.com/vi/YoHD9XEInc0/maxresdefault.jpg",
        category: "sci-fi",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.4, // 8.8 / 2
        link: "https://www.youtube.com/embed/YoHD9XEInc0",
        description: "A skilled thief enters the dreams of others to steal or implant ideas. The film explores the complexities of the subconscious, reality, and guilt. Leonardo DiCaprio leads a star-studded cast in this mind-bending sci-fi thriller. The trailer showcases dreamscapes, intense action, and the suspenseful psychological tension central to the narrative."
    },
    {
        title: "The Matrix",
        image: "https://img.youtube.com/vi/vKQi3bBA1y8/maxresdefault.jpg",
        category: "sci-fi",
        language: "english",
        type: "movie",
        year: 1999,
        rating: 4.35, // 8.7 / 2
        link: "https://www.youtube.com/embed/vKQi3bBA1y8",
        description: "A hacker learns the truth about the reality he lives in and joins a rebellion against machines controlling humanity. Neo, played by Keanu Reeves, navigates action, philosophy, and self-discovery. The film’s groundbreaking visuals and concepts redefine sci-fi cinema. The trailer perfectly sets up its revolutionary action sequences and the battle between illusion and reality."
    },
    {
        title: "Goodfellas",
        image: "https://img.youtube.com/vi/qo5jJpHtI1Y/hqdefault.jpg",
        category: "crime_drama",
        language: "english",
        type: "movie",
        year: 1990,
        rating: 4.35, // 8.7 / 2
        link: "https://www.youtube.com/embed/qo5jJpHtI1Y",
        description: "The story of Henry Hill and his life in the mob, chronicling his relationships, crimes, and eventual downfall. Directed by Martin Scorsese, it’s a detailed exploration of crime, loyalty, and betrayal. Ray Liotta, Robert De Niro, and Joe Pesci deliver unforgettable performances. The trailer introduces the gritty tone, fast-paced storytelling, and high-stakes drama."
    },
    {
        title: "The Empire Strikes Back",
        image: "https://img.youtube.com/vi/JNwNXF9Y6kY/maxresdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 1980,
        rating: 4.35, // 8.7 / 2
        link: "https://www.youtube.com/embed/JNwNXF9Y6kY",
        description: "The Rebels are pursued by the Empire after their victory on Hoth, while Luke trains with Yoda to become a Jedi. Themes of hope, conflict, and destiny drive this iconic Star Wars installment. The film deepens character arcs and expands the universe with epic battles. The trailer teases space conflicts, lightsaber duels, and emotional drama between the main characters."
    },
    {
        title: "Interstellar",
        image: "https://img.youtube.com/vi/zSWdZVtXT7E/maxresdefault.jpg",
        category: "sci-fi",
        language: "english",
        type: "movie",
        year: 2014,
        rating: 4.25, // 8.5 / 2
        link: "https://www.youtube.com/embed/zSWdZVtXT7E",
        description: "In a dystopian future, a team of explorers travels through a wormhole to find a new habitable planet. Matthew McConaughey stars as Cooper, facing personal sacrifice for humanity’s survival. The film explores love, time, and the vastness of space with stunning visuals and Hans Zimmer’s evocative score. The trailer highlights epic space sequences and the emotional journey of the characters."
    },
    {
        title: "Gladiator",
        image: "https://img.youtube.com/vi/owK1qxDselE/hqdefault.jpg",
        category: "action",
        language: "english",
        type: "movie",
        year: 2000,
        rating: 4.35, // 8.7 / 2
        link: "https://www.youtube.com/embed/owK1qxDselE",
        description: "A former Roman General, Maximus, seeks revenge against the corrupt emperor who murdered his family and sent him into slavery. Russell Crowe delivers a powerhouse performance, combining strength and vulnerability. The film explores honor, betrayal, and resilience, with epic battle sequences. The trailer captures the grandeur of ancient Rome and the intense personal journey of Maximus."
    },
    {
        title: "Titanic",
        image: "https://img.youtube.com/vi/kVrqfYjkTdQ/maxresdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 1997,
        rating: 4.35, // 8.7 / 2
        link: "https://www.youtube.com/embed/kVrqfYjkTdQ",
        description: "A young couple from different social classes fall in love aboard the ill-fated RMS Titanic. Leonardo DiCaprio and Kate Winslet deliver unforgettable performances in this epic romance. The story balances intimate romance with the disaster’s dramatic intensity. The trailer showcases both the emotional bond and the catastrophic events that define the movie."
    },
    {
        title: "The Lion King",
        image: "https://img.youtube.com/vi/7TavVZMewpY/maxresdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 1994,
        rating: 4.45, // 8.9 / 2
        link: "https://www.youtube.com/embed/7TavVZMewpY",
        description: "A young lion prince flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and courage. The film explores themes of family, leadership, and destiny through stunning animation and memorable songs. James Earl Jones and Matthew Broderick voice iconic characters. The trailer introduces the dramatic story, emotional depth, and the grandeur of the African savanna."
    },
    {
        title: "Jurassic Park",
        image: "https://img.youtube.com/vi/QWBKEmWWL38/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 1993,
        rating: 4.35, // 8.7 / 2
        link: "https://www.youtube.com/embed/QWBKEmWWL38",
        description: "A theme park of cloned dinosaurs turns into a nightmare when the creatures break free. The film blends adventure, suspense, and groundbreaking visual effects. Sam Neill, Laura Dern, and Jeff Goldblum lead a cast navigating life-and-death situations. The trailer showcases iconic dinosaurs, thrilling action sequences, and tension-filled moments of survival."
    },
    {
        title: "Fight Club",
        image: "https://img.youtube.com/vi/SUXWAEX2jlg/maxresdefault.jpg",
        category: "action",
        language: "english",
        type: "movie",
        year: 1999,
        rating: 4.35, // 8.7 / 2
        link: "https://www.youtube.com/embed/SUXWAEX2jlg",
        description: "An insomniac office worker forms an underground fight club with a soap salesman, exploring themes of identity, consumerism, and rebellion. Edward Norton and Brad Pitt deliver iconic performances. The film’s narrative twists and dark humor make it a cult classic. The trailer captures the edgy tone, tension, and psychological conflict central to the story."
    },
    {
        title: "Avatar",
        image: "https://img.youtube.com/vi/5PSNL1qE6VY/maxresdefault.jpg",
        category: "sci-fi",
        language: "english",
        type: "movie",
        year: 2009,
        rating: 4.35, // 8.7 / 2
        link: "https://www.youtube.com/embed/5PSNL1qE6VY",
        description: "A paraplegic Marine is dispatched to the moon Pandora on a unique mission but becomes torn between following orders and protecting the alien world. James Cameron’s direction, combined with groundbreaking CGI, creates a fully immersive experience. Themes of colonialism, love, and environmentalism are explored. The trailer highlights stunning visuals, action sequences, and the conflict between humans and Na’vi."
    },

    {
        title: "The Avengers",
        image: "https://img.youtube.com/vi/eOrNdBpGMv8/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2012,
        rating: 4.25, // 8.5 / 2
        link: "https://www.youtube.com/embed/eOrNdBpGMv8",
        description: "Earth’s mightiest heroes assemble to stop the mischievous Loki and his alien army. Featuring Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye, the film blends action, humor, and teamwork. The story emphasizes responsibility, heroism, and sacrifice. The trailer highlights epic battles, witty dialogues, and the chemistry among Marvel’s iconic superheroes."
    },
    {
        title: "Iron Man",
        image: "https://img.youtube.com/vi/8ugaeA-nMTc/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2008,
        rating: 4.15, // 8.3 / 2
        link: "https://www.youtube.com/embed/8ugaeA-nMTc",
        description: "Tony Stark, a wealthy industrialist and genius inventor, is kidnapped and builds a high-tech suit to escape. He becomes the armored superhero Iron Man, fighting against injustice. The film explores themes of redemption, responsibility, and innovation. The trailer showcases thrilling action, cutting-edge technology, and Robert Downey Jr.'s charismatic performance."
    },
    {
        title: "Guardians of the Galaxy",
        image: "https://img.youtube.com/vi/d96cjJhvlMA/maxresdefault.jpg",
        category: "sci-fi",
        language: "english",
        type: "movie",
        year: 2014,
        rating: 4.15, // 8.3 / 2
        link: "https://www.youtube.com/embed/d96cjJhvlMA",
        description: "A group of intergalactic misfits must band together to stop a powerful villain from destroying the galaxy. Chris Pratt leads as Star-Lord, blending humor and heroism. Themes of friendship, redemption, and teamwork are central. The trailer highlights colorful visuals, comedic interactions, and epic space battles."
    },
    {
        title: "Black Panther",
        image: "https://img.youtube.com/vi/xjDjIWPwcPU/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2018,
        rating: 4.25, // 8.5 / 2
        link: "https://www.youtube.com/embed/xjDjIWPwcPU",
        description: "T’Challa returns to Wakanda to assume the throne but faces challenges from a formidable enemy. The film explores identity, legacy, and responsibility with a rich cultural backdrop. Chadwick Boseman shines as Black Panther. The trailer emphasizes intense action, advanced technology, and the regal and emotional aspects of Wakanda."
    },
    {
        title: "Spider-Man: No Way Home",
        image: "https://img.youtube.com/vi/JfVOs4VSpmA/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2021,
        rating: 4.15, // 8.3 / 2
        link: "https://www.youtube.com/embed/JfVOs4VSpmA",
        description: "Peter Parker struggles with his identity exposed to the world, leading to dangerous multiverse consequences. The film combines action, nostalgia, and emotional stakes, featuring multiple Spider-Men. Tom Holland delivers heartfelt and dynamic performances. The trailer highlights thrilling multiverse battles, surprises, and emotional drama."
    },
    {
        title: "Wonder Woman",
        image: "https://img.youtube.com/vi/1Q8fG0TtVAY/hqdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 4.1, // 8.2 / 2
        link: "https://www.youtube.com/embed/1Q8fG0TtVAY",
        description: "Diana, princess of the Amazons, discovers her destiny to save the world during World War I. Gal Gadot portrays Wonder Woman, showcasing strength, compassion, and heroism. Themes of justice, courage, and humanity are central. The trailer features epic battles, dynamic combat, and her iconic journey as a superhero."
    },
    {
        title: "Doctor Strange",
        image: "https://img.youtube.com/vi/HSzx-zryEgM/maxresdefault.jpg",
        category: "sci-fi",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.1, // 8.2 / 2
        link: "https://www.youtube.com/embed/HSzx-zryEgM",
        description: "Dr. Stephen Strange, a brilliant but arrogant surgeon, discovers the mystical arts after a life-changing accident. Themes of humility, self-discovery, and heroism are explored. Benedict Cumberbatch delivers a compelling lead performance. The trailer highlights magical battles, visual spectacles, and Strange’s transformation into a sorcerer."
    },
    {
        title: "Thor: Ragnarok",
        image: "https://img.youtube.com/vi/ue80QwXMRHg/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 4.1, // 8.2 / 2
        link: "https://www.youtube.com/embed/ue80QwXMRHg",
        description: "Thor must escape from the planet Sakaar and prevent Ragnarok—the destruction of Asgard. The film combines action, humor, and cosmic adventure, with Chris Hemsworth shining as Thor. Themes of leadership, family, and resilience are central. The trailer highlights colorful battles, witty humor, and Thor’s epic quest."
    },
    {
        title: "The Avengers: Endgame",
        image: "https://img.youtube.com/vi/TcMBFSGVi1c/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2019,
        rating: 4.25, // 8.5 / 2
        link: "https://www.youtube.com/embed/TcMBFSGVi1c",
        description: "After Thanos’ devastating snap, the Avengers reunite to reverse its effects and restore balance to the universe. The film explores sacrifice, heroism, and teamwork. The trailer highlights epic battles, emotional moments, and the climactic conclusion of the Marvel saga."
    },
    {
        title: "Star Wars: The Force Awakens",
        image: "https://img.youtube.com/vi/sGbxmsDFVnE/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.15, // 8.3 / 2
        link: "https://www.youtube.com/embed/sGbxmsDFVnE",
        description: "Thirty years after the defeat of the Galactic Empire, a new threat arises in the form of the First Order. Rey, Finn, and Poe Dameron lead the fight for freedom. Themes of hope, friendship, and courage are central. The trailer showcases thrilling space battles, mysterious new characters, and the continuation of the Star Wars saga."
    },
    {
        title: "Frozen",
        image: "https://img.youtube.com/vi/TbQm5doF_Uc/maxresdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2013,
        rating: 4.15, // 8.3 / 2
        link: "https://www.youtube.com/embed/TbQm5doF_Uc",
        description: "Princess Anna teams up with Kristoff, Sven, and Olaf to find her sister Elsa, whose icy powers have trapped their kingdom in eternal winter. The film emphasizes love, family, and self-acceptance. Its animation, music, and humor are iconic. The trailer highlights memorable songs, magical visuals, and the emotional journey of the sisters."
    },
    {
        title: "Batman v Superman: Dawn of Justice",
        image: "https://img.youtube.com/vi/0WWzgGyAH6Y/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 3.65, // 7.3 / 2
        link: "https://www.youtube.com/embed/0WWzgGyAH6Y",
        description: "Batman confronts Superman, questioning his role as a hero, while a greater threat emerges. Themes of morality, power, and justice clash. Ben Affleck and Henry Cavill star in an epic superhero showdown. The trailer emphasizes intense action, iconic character confrontations, and the setup for a larger DC Universe."
    },
    {
        title: "Aquaman",
        image: "https://img.youtube.com/vi/WDkg3h8PCVU/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2018,
        rating: 3.85, // 7.7 / 2
        link: "https://www.youtube.com/embed/WDkg3h8PCVU",
        description: "Arthur Curry, heir to the underwater kingdom of Atlantis, must embrace his destiny as Aquaman. Themes of identity, responsibility, and heroism are explored. Jason Momoa delivers a charismatic performance. The trailer showcases underwater battles, spectacular visuals, and the epic scale of Atlantis."
    },
    {
        title: "Justice League",
        image: "https://img.youtube.com/vi/r9-DM9uBtVI/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 3.65, // 7.3 / 2
        link: "https://www.youtube.com/embed/r9-DM9uBtVI",
        description: "Batman and Wonder Woman unite a team of superheroes including Aquaman, Cyborg, and Flash to stop Steppenwolf from destroying Earth. Themes of teamwork, heroism, and sacrifice are central. The trailer highlights epic battles, powers in action, and the coming together of DC’s iconic heroes."
    },

    {
        title: "Batman Begins",
        image: "https://img.youtube.com/vi/neY2xVmOfUM/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2005,
        rating: 4.0, // 8.0 / 2
        link: "https://www.youtube.com/embed/neY2xVmOfUM",
        description: "Bruce Wayne trains to fight crime in Gotham City and becomes Batman. Themes of fear, justice, and moral responsibility are explored. Christian Bale delivers a dark, compelling performance. The trailer highlights his transformation, intense action sequences, and Gotham’s gritty atmosphere."
    },
    {
        title: "The Dark Knight",
        image: "https://img.youtube.com/vi/EXeTwQWrcwY/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2008,
        rating: 4.5, // 9.0 / 2
        link: "https://www.youtube.com/embed/EXeTwQWrcwY",
        description: "Batman faces the anarchic Joker, challenging the morality of heroism and the chaos within Gotham. Heath Ledger’s iconic Joker and Christian Bale’s Batman deliver unforgettable performances. Themes of justice, ethics, and psychological tension are central. The trailer teases intense action, suspense, and the battle between order and chaos."
    },
    {
        title: "Justice League: Snyder Cut",
        image: "https://img.youtube.com/vi/3cxixDgHUYw/hqdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2021,
        rating: 4.1, // 8.2 / 2
        link: "https://www.youtube.com/embed/3cxixDgHUYw",
        description: "Zack Snyder’s vision of Justice League presents a complete story with extended character arcs and epic battles. Batman, Wonder Woman, Aquaman, Cyborg, and Flash join forces against Steppenwolf. Themes of heroism, sacrifice, and unity are central. The trailer showcases dramatic visuals, expanded scenes, and emotional stakes."
    },
    {
        title: "Captain Marvel",
        image: "https://img.youtube.com/vi/Z1BCujX3pw8/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2019,
        rating: 4.4,
        link: "https://www.youtube.com/embed/Z1BCujX3pw8",
        description: "Carol Danvers becomes Captain Marvel after gaining cosmic powers during a life-changing accident. The film explores identity, empowerment, and courage. Brie Larson delivers a commanding performance. The trailer highlights spectacular powers, intergalactic battles, and Carol’s transformation into a hero."
    },
    {
        title: "Shang-Chi and the Legend of the Ten Rings",
        image: "https://img.youtube.com/vi/8YjFbMbfXaQ/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2021,
        rating: 4.6,
        link: "https://www.youtube.com/embed/8YjFbMbfXaQ",
        description: "Martial artist Shang-Chi is forced to confront his past and his father, the leader of the Ten Rings. The film explores family, identity, and destiny. Simu Liu delivers a dynamic performance. The trailer showcases epic martial arts sequences, mystical powers, and emotional stakes."
    },
    {
        title: "Doctor Strange in the Multiverse of Madness",
        image: "https://img.youtube.com/vi/aWzlQ2N6qqg/maxresdefault.jpg",
        category: "sci-fi",
        language: "english",
        type: "movie",
        year: 2022,
        rating: 4.5,
        link: "https://www.youtube.com/embed/aWzlQ2N6qqg",
        description: "Doctor Strange navigates the multiverse to face new threats that endanger reality itself. The film explores magic, morality, and consequences of power. Benedict Cumberbatch delivers a compelling performance. The trailer highlights mystical action, alternate realities, and suspenseful storytelling."
    },

    {
        title: "Inglourious Basterds",
        image: "https://img.youtube.com/vi/KnrRy6kSFF0/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2009,
        rating: 4.6,
        link: "https://www.youtube.com/embed/KnrRy6kSFF0",
        description: "During WWII, a group of Jewish-American soldiers plots to assassinate Nazi leaders. The film blends suspense, dark humor, and revenge. Brad Pitt leads a dynamic ensemble cast. The trailer emphasizes tension, clever schemes, and thrilling wartime action."
    },
    {
        title: "Avengers: Infinity War",
        image: "https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2018,
        rating: 4.8,
        link: "https://www.youtube.com/embed/6ZfuNTqbHE8",
        description: "The Avengers and their allies must stop Thanos from collecting all Infinity Stones. The film explores sacrifice, heroism, and teamwork across the Marvel Universe. Robert Downey Jr., Chris Hemsworth, and Scarlett Johansson lead a stellar cast. The trailer showcases high-stakes action, epic battles, and dramatic tension."
    },
    {
        title: "Spider-Man: Far From Home",
        image: "https://img.youtube.com/vi/Nt9L1jCKGnE/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2019,
        rating: 4.5,
        link: "https://www.youtube.com/embed/Nt9L1jCKGnE",
        description: "Peter Parker goes on a school trip to Europe but faces new threats as Mysterio emerges. The film explores responsibility, identity, and heroism. Tom Holland delivers a charming performance. The trailer highlights superhero action, humor, and unexpected challenges."
    },
    {
        title: "Ant-Man",
        image: "https://img.youtube.com/vi/pWdKf3MneyI/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.4,
        link: "https://www.youtube.com/embed/pWdKf3MneyI",
        description: "Scott Lang becomes Ant-Man and must embrace his inner hero to save the world. The film explores redemption, teamwork, and courage. Paul Rudd delivers a humorous and heroic performance. The trailer emphasizes shrinking technology, heist action, and comic moments."
    },
    {
        title: "Captain America: Civil War",
        image: "https://img.youtube.com/vi/dKrVegVI0Us/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.6,
        link: "https://www.youtube.com/embed/dKrVegVI0Us",
        description: "The Avengers are divided over government oversight, leading to conflict between Team Cap and Team Iron Man. The film explores loyalty, morality, and consequences of power. Chris Evans and Robert Downey Jr. deliver powerful performances. The trailer showcases superhero battles, emotional stakes, and intense action."
    },
    {
        title: "Guardians of the Galaxy Vol. 2",
        image: "https://img.youtube.com/vi/dW1BIid8Osg/maxresdefault.jpg",
        category: "sci-fi",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 4.5,
        link: "https://www.youtube.com/embed/dW1BIid8Osg",
        description: "The Guardians struggle with personal conflicts while protecting the galaxy from new threats. The film explores family, friendship, and identity. Chris Pratt and Zoe Saldana lead a dynamic cast. The trailer highlights humor, space action, and emotional character arcs."
    },
    {
        title: "Thor",
        image: "https://img.youtube.com/vi/JOddp-nlNvQ/hqdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2011,
        rating: 4.4,
        link: "https://www.youtube.com/embed/JOddp-nlNvQ",
        description: "Thor is banished to Earth and must prove himself worthy to reclaim his powers. The film explores humility, courage, and heroism. Chris Hemsworth delivers a commanding performance. The trailer showcases epic battles, character growth, and mythological adventure."
    },
    {
        title: "The Incredible Hulk",
        image: "https://img.youtube.com/vi/xbqNb2PFKKA/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2008,
        rating: 4.3,
        link: "https://www.youtube.com/embed/xbqNb2PFKKA",
        description: "Bruce Banner transforms into the Hulk and must confront the military and a deadly adversary. The film explores anger, identity, and self-control. Edward Norton delivers a compelling performance. The trailer highlights intense action, Hulk transformations, and suspenseful confrontations."
    },
    {
        title: "Black Panther: Wakanda Forever",
        image: "https://img.youtube.com/vi/_Z3QKkl1WyM/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2022,
        rating: 4.6,
        link: "https://www.youtube.com/embed/_Z3QKkl1WyM",
        description: "The people of Wakanda fight to protect their nation after King T’Challa’s death. The film explores legacy, leadership, and courage. Letitia Wright delivers a standout performance. The trailer highlights epic battles, cultural pride, and heroic efforts to defend Wakanda."
    },

    {
        title: "Ant-Man and the Wasp",
        image: "https://img.youtube.com/vi/1HpZevFifuo/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2018,
        rating: 4.4,
        link: "https://www.youtube.com/embed/1HpZevFifuo",
        description: "Scott Lang teams up with Hope van Dyne as the Wasp to uncover secrets from the past. The film explores teamwork, redemption, and adventure. Paul Rudd and Evangeline Lilly deliver fun, dynamic performances. The trailer highlights heist action, shrinking technology, and lighthearted humor."
    },
    {
        title: "Captain America: The First Avenger",
        image: "https://img.youtube.com/vi/JerVrbLldXw/hqdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2011,
        rating: 4.5,
        link: "https://www.youtube.com/embed/JerVrbLldXw",
        description: "Steve Rogers transforms into Captain America during WWII to fight Hydra. The film explores heroism, courage, and sacrifice. Chris Evans delivers a breakout performance. The trailer highlights epic battles, patriotic themes, and thrilling action."
    },
    {
        title: "Iron Man 2",
        image: "https://img.youtube.com/vi/wKtcmiifycU/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.3,
        link: "https://www.youtube.com/embed/wKtcmiifycU",
        description: "Tony Stark faces new enemies and government scrutiny while balancing his personal life. The film explores responsibility, technology, and heroism. Robert Downey Jr. reprises his iconic role. The trailer highlights armored battles, witty banter, and high-stakes action."
    },
    {
        title: "Avengers: Age of Ultron",
        image: "https://img.youtube.com/vi/tmeOjFno6Do/maxresdefault.jpg",
        category: "action_adventure",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.6,
        link: "https://www.youtube.com/embed/tmeOjFno6Do",
        description: "The Avengers face Ultron, a rogue AI threatening humanity. The film explores teamwork, moral dilemmas, and heroism. Robert Downey Jr., Chris Hemsworth, and Scarlett Johansson deliver thrilling performances. The trailer emphasizes epic battles, high-tech action, and dramatic tension."
    },
    {
        title: "Spirited Away",
        image: "https://img.youtube.com/vi/ByXuk9QqQkk/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2001,
        rating: 4.9,
        link: "https://www.youtube.com/embed/ByXuk9QqQkk",
        description: "Chihiro, a young girl, becomes trapped in a mysterious and magical world of spirits. She must find courage and determination to save her parents. Studio Ghibli’s masterpiece features stunning animation, deep emotional storytelling, and memorable characters."
    },
    {
        title: "Your Name",
        image: "https://img.youtube.com/vi/xU47nhruN-Q/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.8,
        link: "https://www.youtube.com/embed/xU47nhruN-Q",
        description: "Two teenagers discover they are mysteriously swapping bodies. Through their connection, they unravel secrets and form a bond across time and space. Makoto Shinkai’s direction combines romance, fantasy, and breathtaking visuals."
    },

    {
        title: "Howl's Moving Castle",
        image: "https://img.youtube.com/vi/iwROgK94zcM/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2004,
        rating: 4.8,
        link: "https://www.youtube.com/embed/iwROgK94zcM",
        description: "Sophie is transformed into an old woman by a witch’s curse and encounters the wizard Howl. Studio Ghibli’s film is a magical journey of love, courage, and self-discovery."
    },
    {
        title: "Kiki's Delivery Service",
        image: "https://img.youtube.com/vi/4bG17OYs-GA/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 1989,
        rating: 4.7,
        link: "https://www.youtube.com/embed/4bG17OYs-GA",
        description: "A young witch named Kiki starts her own delivery service in a new town. Miyazaki’s film beautifully depicts independence, responsibility, and growing up through enchanting animation."
    },


    {
        title: "Milky Subway: The Galactic Limited Express",
        image: "https://img.youtube.com/vi/3bD1dfiRMu4/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2025,
        rating: 4.3,
        link: "https://www.youtube.com/embed/3bD1dfiRMu4",
        description: "In this sci-fi adventure, genetically enhanced 'super human' Chiharu and cyborg Makina are sentenced to perform community service aboard the Milky Subway. Their journey leads them to uncover a multidimensional rift threatening reality."
    },
    {
        title: "Suzume",
        image: "https://img.youtube.com/vi/5pTcio2hTSw/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2023,
        rating: 4.7,
        link: "https://www.youtube.com/embed/5pTcio2hTSw",
        description: "A young girl named Suzume embarks on a journey to close mysterious doors causing disasters across Japan. Directed by Makoto Shinkai, this film blends fantasy with heartfelt storytelling."
    },
    {
        title: "Junk World",
        image: "https://img.youtube.com/vi/ETlOSBR92Fs/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2025,
        rating: 4.5,
        link: "https://www.youtube.com/embed/ETlOSBR92Fs",
        description: "In a post-apocalyptic future, Robin and Commander Triss investigate a cult of artificial humans. Their mission leads them to a multidimensional rift threatening reality itself."
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba - The Movie: Infinity Castle",
        image: "https://img.youtube.com/vi/a61evTtTVIY/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2025,
        rating: 4.8,
        link: "https://www.youtube.com/embed/a61evTtTVIY",
        description: "Tanjiro and his comrades face a formidable demon in the Infinity Castle. This film continues the saga of 'Demon Slayer' with intense battles and emotional depth."
    },
    {
        title: "The Boy and the Heron",
        image: "https://img.youtube.com/vi/t5khm-VjEu4/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2023,
        rating: 4.6,
        link: "https://www.youtube.com/embed/t5khm-VjEu4",
        description: "A young boy discovers a magical world through a heron. Hayao Miyazaki's return to filmmaking brings a tale of adventure and self-discovery."
    },
    {
        title: "Gantz: O",
        image: "https://img.youtube.com/vi/3bD1dfiRMu4/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.6,
        link: "https://www.youtube.com/embed/3bD1dfiRMu4",
        description: "In a city overrun by alien creatures, a group of recently deceased individuals are forced to participate in a deadly game. This 3D animated film offers intense action and a dark narrative."
    },
    {
        title: "Angel's Egg",
        image: "https://img.youtube.com/vi/3bD1dfiRMu4/maxresdefault.jpg",
        category: "anime_Series",
        language: "japanese",
        type: "movie",
        year: 1985,
        rating: 4.5,
        link: "https://www.youtube.com/embed/3bD1dfiRMu4",
        description: "A mysterious girl carries a large egg through a desolate world, encountering a man who offers to help her. This surreal and atmospheric film explores themes of faith and existence."
    },

    {
        title: "UniteUp! -Uni:Birth-",
        image: "https://img.youtube.com/vi/3bD1dfiRMu4/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2025,
        rating: 4.5,
        link: "https://www.youtube.com/embed/3bD1dfiRMu4",
        description: "The second season of the 'UniteUp!' anime series, 'Uni:Birth', continues the story of the virtual idol group Protostar as they navigate the challenges of the entertainment industry."
    },
    {
        title: "Shinsei Galverse",
        image: "https://img.youtube.com/vi/3bD1dfiRMu4/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2025,
        rating: 4.4,
        link: "https://www.youtube.com/embed/3bD1dfiRMu4",
        description: "A fan-funded original net animation that blends 1990s anime visual motifs with contemporary science fiction storytelling, following a mysterious girl named Zero on the planet Amatera."
    },
    {
        title: "I-Chu: Halfway Through the Idol",
        image: "https://img.youtube.com/vi/3bD1dfiRMu4/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2021,
        rating: 4.3,
        link: "https://www.youtube.com/embed/3bD1dfiRMu4",
        description: "An anime adaptation of the 'I-Chu' game, focusing on the journey of aspiring idols as they navigate the challenges of the entertainment industry."
    },
    {
        title: "Ponyo",
        image: "https://img.youtube.com/vi/h6XP82TyFWw/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2008,
        rating: 4.5,
        link: "https://www.youtube.com/embed/h6XP82TyFWw",
        description: "A little goldfish named Ponyo longs to become human after befriending a boy named Sosuke.\nHayao Miyazaki delivers a warm, whimsical tale with themes of family and nature.\nBright, hand-crafted animation and playful characters make it great for all ages.\nThe trailer emphasizes the film’s charm, colorful imagery, and seaside adventure."
    },
    {
        title: "My Neighbor Totoro",
        image: "https://img.youtube.com/vi/HaLISMAGdOE/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 1988,
        rating: 4.8,
        link: "https://www.youtube.com/embed/HaLISMAGdOE",
        description: "Two young sisters move to the countryside and encounter friendly forest spirits, including Totoro.\nA gentle, heartfelt story about childhood, imagination, and the comforts of family.\nStudio Ghibli’s timeless classic blends quiet moments with charming, iconic creatures.\nThe trailer highlights the film’s pastoral beauty, wonder, and emotional warmth."
    },
    {
        title: "Princess Mononoke",
        image: "https://img.youtube.com/vi/4OiMOHRDs14/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 1997,
        rating: 4.8,
        link: "https://www.youtube.com/embed/4OiMOHRDs14",
        description: "A young prince becomes embroiled in a war between humans and the spirits of a sacred forest.\nHayao Miyazaki mixes epic action with mature themes about nature and industrialization.\nThe film combines visceral battles, moral ambiguity, and powerful character arcs.\nThe trailer showcases savage clashes, majestic creatures, and the story’s tense drama."
    },
    {
        title: "Grave of the Fireflies",
        image: "https://img.youtube.com/vi/lhlh7JVcTt8/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 1988,
        rating: 4.9,
        link: "https://www.youtube.com/embed/lhlh7JVcTt8",
        description: "A heartbreaking wartime drama following two siblings struggling to survive after WWII bombings.\nIsao Takahata’s film is a raw, emotional portrait of loss, survival, and the cost of war.\nIts tragic realism and delicate animation make it one of cinema’s most devastating works.\nThe trailer communicates the film’s emotional weight, bleakness, and human dignity."
    },
    {
        title: "Howl's Moving Castle",
        image: "https://img.youtube.com/vi/iwROgK94zcM/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2004,
        rating: 4.7,
        link: "https://www.youtube.com/embed/iwROgK94zcM",
        description: "Sophie is cursed into an old woman's body and finds refuge with the enigmatic wizard Howl.\nThe film explores love, courage, and the absurdities of war with Studio Ghibli’s trademark fantasy.\nIts imaginative world-building and memorable characters are visually spectacular.\nThe trailer highlights the moving castle, magical set pieces, and emotional journey."
    },
    {
        title: "Kiki's Delivery Service",
        image: "https://img.youtube.com/vi/4bG17OYs-GA/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 1989,
        rating: 4.6,
        link: "https://www.youtube.com/embed/4bG17OYs-GA",
        description: "A young witch named Kiki leaves home to train and starts a delivery business in a seaside town.\nThe film is a warm coming-of-age story about independence, friendship, and finding your place.\nMiyazaki’s gentle storytelling and lovely score create a comforting, uplifting experience.\nThe trailer highlights Kiki’s flights, charming town scenes, and moments of personal growth."
    },
    {
        title: "Nausicaä of the Valley of the Wind",
        image: "https://img.youtube.com/vi/6zhLBe319KE/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 1984,
        rating: 4.7,
        link: "https://www.youtube.com/embed/6zhLBe319KE",
        description: "In a toxic post-apocalyptic world, Princess Nausicaä seeks peace between humans and nature.\nThis early Miyazaki epic blends environmental themes with soaring adventure.\nIts striking visuals and moral complexity helped launch Studio Ghibli’s legacy.\nThe trailer emphasizes the film’s epic scope, creatures, and poignant stakes."
    },
    {
        title: "Castle in the Sky (Laputa)",
        image: "https://img.youtube.com/vi/5lMRfLJGXSM/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 1986,
        rating: 4.6,
        link: "https://www.youtube.com/embed/5lMRfLJGXSM",
        description: "Aerial pirates and young adventurers search for a legendary floating island in the sky.\nMiyazaki’s early classic mixes swashbuckling action with wonder and inventive machinery.\nThemes of greed versus stewardship and friendship run through the story.\nThe trailer showcases aerial set pieces, the mystical island, and rousing adventure."
    },
    {
        title: "The Tale of the Princess Kaguya",
        image: "https://img.youtube.com/vi/W71mtorCZDw/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2013,
        rating: 4.7,
        link: "https://www.youtube.com/embed/W71mtorCZDw",
        description: "A lyrical retelling of the folktale of a moon princess raised on Earth and destined to return home.\nIsao Takahata’s film uses delicate, hand-drawn watercolor-style animation to powerful effect.\nIt’s an emotionally rich meditation on impermanence, joy, and regret.\nThe trailer conveys the film’s fragile beauty, emotional depth, and poetic visuals."
    },
    {
        title: "When Marnie Was There",
        image: "https://img.youtube.com/vi/jjmrxqcQdYg/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2014,
        rating: 4.5,
        link: "https://www.youtube.com/embed/jjmrxqcQdYg",
        description: "A quiet, emotional story about a lonely girl who befriends a mysterious girl named Marnie.\nThe film explores memory, friendship, and the haunting ties of family.\nStudio Ghibli’s gentle direction and evocative visuals make this a moving drama.\nThe trailer highlights the coastal town setting, haunting mystery, and tender moments."
    },
    {
        title: "Porco Rosso",
        image: "https://img.youtube.com/vi/awEC-aLDzjs/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 1992,
        rating: 4.4,
        link: "https://www.youtube.com/embed/awEC-aLDzjs",
        description: "A veteran World War I pilot turned pig becomes a bounty hunter of sky pirates over the Adriatic.\nMiyazaki mixes romantic melancholy with adventurous aerial dogfights and wry humor.\nThe film celebrates flying, honor, and the bittersweet nature of its protagonist.\nThe trailer shows aerial action, charming characters, and nostalgic themes."
    },
    {
        title: "Weathering With You",
        image: "https://img.youtube.com/vi/Q6iK6DjV_iE/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2019,
        rating: 4.5,
        link: "https://www.youtube.com/embed/Q6iK6DjV_iE",
        description: "A runaway teen meets a girl who can stop the rain and brings sunlight — at a cost.\nMakoto Shinkai blends romance, spectacle, and social undercurrents in a modern Tokyo setting.\nThe film’s visuals and soundtrack amplify its emotional and supernatural beats.\nThe trailer captures dazzling weather effects, youthful passion, and moral tension."
    },
    {
        title: "Paprika",
        image: "https://img.youtube.com/vi/SBrUhQ0_qYA/maxresdefault.jpg",
        category: "anime_Series",
        language: "english",
        type: "movie",
        year: 2006,
        rating: 4.6,
        link: "https://www.youtube.com/embed/SBrUhQ0_qYA",
        description: "A device that lets therapists enter patients’ dreams is stolen, dissolving lines between dream and reality.\nSatoshi Kon’s kaleidoscopic film explores identity, technology, and the unconscious mind.\nIt’s a wild, visually inventive ride that inspired filmmakers worldwide.\nThe trailer highlights the film’s surreal imagery, dizzying set pieces, and psychological thrills."
    },
    {
        title: "The Boy and the Heron",
        image: "https://img.youtube.com/vi/t5khm-VjEu4/maxresdefault.jpg",
        category: "anime_Series",
        language: "japanese",
        type: "movie",
        year: 2023,
        rating: 4.7,
        link: "https://www.youtube.com/embed/t5khm-VjEu4",
        description: "After losing his mother, Mahito enters a mysterious world guided by a talking heron.\nHayao Miyazaki’s latest epic explores grief, courage, and the meaning of life.\nThe story combines surreal fantasy with heartfelt human emotion.\nThe trailer highlights imaginative worlds, strange creatures, and moving themes."
    },


    {
        title: "A Silent Voice",
        image: "https://img.youtube.com/vi/nfK6UgLra7g/maxresdefault.jpg",
        category: "anime_Series",
        language: "japanese",
        type: "movie",
        year: 2016,
        rating: 4.8,
        link: "https://www.youtube.com/embed/nfK6UgLra7g",
        description: "A boy who once bullied a deaf girl seeks redemption years later.\nNaoko Yamada crafts a deeply moving drama about guilt, forgiveness, and empathy.\nThe film emphasizes friendship, healing, and second chances.\nThe trailer reflects emotional highs, quiet pain, and heartfelt drama."
    },
    {
        title: "The Garden of Words",
        image: "https://img.youtube.com/vi/7gcCRAl58u4/maxresdefault.jpg",
        category: "anime_Series",
        language: "japanese",
        type: "movie",
        year: 2013,
        rating: 4.4,
        link: "https://www.youtube.com/embed/7gcCRAl58u4",
        description: "A young student and a woman form a bond during rainy days in a garden.\nMakoto Shinkai tells a quiet story of loneliness, connection, and fleeting encounters.\nThe animation vividly captures rain, nature, and emotions.\nThe trailer conveys intimacy, melancholy, and poetic visuals."
    },
    {
        title: "5 Centimeters Per Second",
        image: "https://img.youtube.com/vi/wdM7athAem0/maxresdefault.jpg",
        category: "anime_Series",
        language: "japanese",
        type: "movie",
        year: 2007,
        rating: 4.5,
        link: "https://www.youtube.com/embed/wdM7athAem0",
        description: "A series of vignettes trace the growing distance between childhood sweethearts.\nMakoto Shinkai explores love, time, and separation with poignant realism.\nThe visuals and music amplify the quiet heartbreak.\nThe trailer emphasizes nostalgia, longing, and emotional resonance."
    },
    {
        title: "Wolf Children",
        image: "https://img.youtube.com/vi/8xLji7WsW0w/maxresdefault.jpg",
        category: "anime_Series",
        language: "japanese",
        type: "movie",
        year: 2012,
        rating: 4.7,
        link: "https://www.youtube.com/embed/8xLji7WsW0w",
        description: "A young mother raises two half-wolf children after their father dies.\nMamoru Hosoda’s film is a moving family drama with fantasy elements.\nIt highlights motherhood, sacrifice, and growth.\nThe trailer emphasizes tender parenting, struggles, and touching moments."
    },

    {
        title: "Stranger Things",
        image: "https://img.youtube.com/vi/mnd7sFt5c3A/maxresdefault.jpg",
        category: "web_series",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.8,
        link: "https://www.youtube.com/embed/mnd7sFt5c3A",
        description: "Set in the 1980s, Stranger Things follows kids in Hawkins, Indiana as they encounter supernatural events. The series blends horror, sci-fi, and coming-of-age storytelling. Its nostalgic 80s setting and thrilling mysteries captivated global audiences. The trailer highlights monsters, friendships, and suspenseful twists."
    },
    {
        title: "Money Heist (La Casa de Papel)",
        image: "https://img.youtube.com/vi/hMANIarjT50/maxresdefault.jpg",
        category: "web_series",
        language: "spanish",
        type: "movie",
        year: 2017,
        rating: 4.7,
        link: "https://www.youtube.com/embed/hMANIarjT50",
        description: "A group of robbers led by 'The Professor' plan the biggest heist in Spain’s history. The show is filled with suspense, twists, and emotional arcs. It became an international sensation for its gripping storytelling. The trailer teases high-stakes action and clever strategies."
    },
    {
        title: "Dark",
        image: "https://img.youtube.com/vi/ESEUoa-mz2c/maxresdefault.jpg",
        category: "web_series",
        language: "german",
        type: "movie",
        year: 2017,
        rating: 4.9,
        link: "https://www.youtube.com/embed/ESEUoa-mz2c",
        description: "Dark follows four families in a German town as time travel uncovers shocking secrets. It is hailed as one of Netflix’s most intelligent shows. Themes of fate, family, and paradoxes are central. The trailer shows eerie visuals and mind-bending suspense."
    },
    {
        title: "Squid Game",
        image: "https://img.youtube.com/vi/oqxAJKy0ii4/maxresdefault.jpg",
        category: "web_series",
        language: "korean",
        type: "movie",
        year: 2021,
        rating: 4.8,
        link: "https://www.youtube.com/embed/oqxAJKy0ii4",
        description: "Hundreds of debt-ridden players enter deadly children’s games for a huge cash prize. The Korean drama became a global phenomenon. It critiques social inequality while delivering intense suspense. The trailer highlights shocking twists and brutal challenges."
    },
    {
        title: "Breaking Bad",
        image: "https://img.youtube.com/vi/HhesaQXLuRY/maxresdefault.jpg",
        category: "web_series",
        language: "english",
        type: "movie",
        year: 2008,
        rating: 5.0,
        link: "https://www.youtube.com/embed/HhesaQXLuRY",
        description: "Walter White, a chemistry teacher, turns to making meth with former student Jesse Pinkman. The series explores morality, crime, and transformation. It’s widely considered one of the greatest TV shows ever made. The trailer teases intensity, crime, and a man’s descent into darkness."
    },
    {
        title: "Narcos",
        image: "https://img.youtube.com/vi/xl8zdCY-abw/maxresdefault.jpg",
        category: "web_series",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.6,
        link: "https://www.youtube.com/embed/xl8zdCY-abw",
        description: "Narcos chronicles the rise of drug kingpin Pablo Escobar and the DEA’s attempts to capture him. The series blends real history with dramatic storytelling. It captures Colombia’s dark drug wars. The trailer showcases gritty action and tense chases."
    },
    {
        title: "All of Us Are Dead",
        image: "https://img.youtube.com/vi/IN5TD4VRcSM/maxresdefault.jpg",
        category: "web_series",
        language: "korean",
        type: "movie",
        year: 2022,
        rating: 4.3,
        link: "https://www.youtube.com/embed/IN5TD4VRcSM",
        description: "When a zombie outbreak starts in a Korean high school, students must fight for survival. The series blends horror with coming-of-age themes. It gained popularity for its intense action and emotional depth. The trailer shows chaos, survival, and shocking twists."
    },
    {
        title: "Mirzapur",
        image: "https://img.youtube.com/vi/ZNeGF-PvRHY/maxresdefault.jpg",
        category: "web_series",
        language: "hindi",
        type: "movie",
        year: 2018,
        rating: 4.4,
        link: "https://www.youtube.com/embed/ZNeGF-PvRHY",
        description: "Set in Uttar Pradesh, Mirzapur revolves around guns, drugs, and gang wars. It’s gritty, raw, and full of power struggles. The series became one of Amazon Prime India’s biggest hits. The trailer highlights crime, revenge, and shocking betrayals."
    },


    {
        title: "Dark",
        image: "https://img.youtube.com/vi/rrwycJ08PSA/maxresdefault.jpg",
        category: "web_series",
        language: "german",
        type: "movie",
        year: 2017,
        rating: 4.8,
        link: "https://www.youtube.com/embed/rrwycJ08PSA",
        description: "Dark is a time-travel thriller set in a small German town where children go missing. The series explores fate, family, and secrets spanning generations. The trailer teases eerie visuals and mind-bending twists."
    },

    {
        title: "Chernobyl",
        image: "https://img.youtube.com/vi/s9APLXM9Ei8/maxresdefault.jpg",
        category: "web_series",
        language: "english",
        type: "movie",
        year: 2019,
        rating: 4.9,
        link: "https://www.youtube.com/embed/s9APLXM9Ei8",
        description: "Chernobyl recounts the 1986 nuclear disaster and its aftermath. The miniseries emphasizes bravery, secrecy, and sacrifice. The trailer conveys haunting imagery, human tragedy, and historical detail."
    },
    {
        title: "Peaky Blinders",
        image: "https://img.youtube.com/vi/oVzVdvGIC7U/maxresdefault.jpg",
        category: "web_series",
        language: "english",
        type: "movie",
        year: 2013,
        rating: 4.8,
        link: "https://www.youtube.com/embed/oVzVdvGIC7U",
        description: "Set in post-WWI Birmingham, Peaky Blinders follows the Shelby crime family’s rise. The series blends style, violence, and politics. The trailer highlights sharp suits, gang wars, and Cillian Murphy’s commanding presence."
    },
    {
        title: "The Crown",
        image: "https://img.youtube.com/vi/JWtnJjn6ng0/maxresdefault.jpg",
        category: "web_series",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.7,
        link: "https://www.youtube.com/embed/JWtnJjn6ng0",
        description: "The Crown follows the reign of Queen Elizabeth II, exploring political rivalries, personal struggles, and historical milestones. The trailer shows grandeur, drama, and rich period detail."
    },
    {
        title: "Delhi Crime",
        image: "https://img.youtube.com/vi/jNuKwlKJx2E/maxresdefault.jpg",
        category: "web_series",
        language: "hindi",
        type: "movie",
        year: 2019,
        rating: 4.6,
        link: "https://www.youtube.com/embed/jNuKwlKJx2E",
        description: "Inspired by real events, Delhi Crime follows the investigation of a brutal crime in Delhi. The series emphasizes police challenges, societal issues, and justice. The trailer is intense and emotional."
    },

    {
        title: "Kingdom",
        image: "https://img.youtube.com/vi/4l-yByZpaaM/maxresdefault.jpg",
        category: "web_series",
        language: "korean",
        type: "movie",
        year: 2019,
        rating: 4.8,
        link: "https://www.youtube.com/embed/4l-yByZpaaM",
        description: "Kingdom mixes historical drama with zombie horror. A crown prince investigates a plague spreading across his kingdom. The trailer reveals chilling visuals, palace intrigue, and relentless undead attacks."
    },
    {
        title: "The Witcher",
        image: "https://img.youtube.com/vi/ndl1W4ltcmg/maxresdefault.jpg",
        category: "web_series",
        language: "english",
        type: "movie",
        year: 2019,
        rating: 4.5,
        link: "https://www.youtube.com/embed/ndl1W4ltcmg",
        description: "The Witcher follows Geralt of Rivia, a monster hunter caught in a world of magic, war, and destiny. The trailer reveals epic battles, dark creatures, and Henry Cavill’s commanding performance."
    },
    {
        title: "Alice in Borderland",
        image: "https://img.youtube.com/vi/49_44FFKZ1M/maxresdefault.jpg",
        category: "web_series",
        language: "japanese",
        type: "movie",
        year: 2020,
        rating: 4.7,
        link: "https://www.youtube.com/embed/49_44FFKZ1M",
        description: "Alice in Borderland follows players trapped in a parallel Tokyo forced to compete in deadly survival games. The trailer shows mystery, high-stakes challenges, and psychological tension."
    },
    {
        title: "Dark Desire",
        image: "https://img.youtube.com/vi/wZfs22E7JmI/maxresdefault.jpg",
        category: "web_series",
        language: "spanish",
        type: "movie",
        year: 2020,
        rating: 3.9,
        link: "https://www.youtube.com/embed/wZfs22E7JmI",
        description: "This Mexican thriller follows Alma, a law professor, whose affair spirals into a web of deceit, mystery, and danger. The trailer highlights passion, betrayal, and suspense."
    },

    {
        title: "Crash Landing on You",
        image: "https://img.youtube.com/vi/GVQGWgeVc4k/maxresdefault.jpg",
        category: "web_series",
        language: "korean",
        type: "movie",
        year: 2019,
        rating: 4.9,
        link: "https://www.youtube.com/embed/GVQGWgeVc4k",
        description: "A South Korean heiress accidentally lands in North Korea after a paragliding mishap, sparking an unlikely romance with a soldier. The trailer shows heartwarming love, danger, and cultural contrasts."
    },
    {
        title: "Lupin",
        image: "https://img.youtube.com/vi/ga0iTWXCGa0/maxresdefault.jpg",
        category: "web_series",
        language: "french",
        type: "movie",
        year: 2021,
        rating: 4.7,
        link: "https://www.youtube.com/embed/ga0iTWXCGa0",
        description: "Inspired by Arsène Lupin, a gentleman thief seeks to avenge his father’s wrongful imprisonment. The trailer shows thrilling heists, charm, and suspenseful confrontations."
    },
    {
        title: "The Notebook",
        image: "https://img.youtube.com/vi/FC6biTjEyZw/maxresdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2004,
        rating: 4.7,
        link: "https://www.youtube.com/embed/FC6biTjEyZw",
        description: "A timeless love story of Noah and Allie whose romance is tested by class differences and time. The trailer showcases passion, heartbreak, and the power of enduring love."
    },
    {
        title: "La La Land",
        image: "https://img.youtube.com/vi/0pdqf4P9MB8/maxresdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.6,
        link: "https://www.youtube.com/embed/0pdqf4P9MB8",
        description: "Sebastian and Mia chase their dreams in Los Angeles while falling in love. The trailer reveals music, bittersweet romance, and sacrifices for ambition."
    },
    {
        title: "Pride & Prejudice",
        image: "https://img.youtube.com/vi/1dYv5u6v55Y/maxresdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2005,
        rating: 4.5,
        link: "https://www.youtube.com/embed/1dYv5u6v55Y",
        description: "Elizabeth Bennet navigates love and class differences when she meets Mr. Darcy. The trailer highlights romance, wit, and period drama charm."
    },

    {
        title: "Call Me by Your Name",
        image: "https://img.youtube.com/vi/Z9AYPxH5NTM/hqdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 4.4,
        link: "https://www.youtube.com/embed/Z9AYPxH5NTM",
        description: "In 1980s Italy, a summer romance blossoms between Elio and Oliver. The trailer highlights tenderness, desire, and a coming-of-age story."
    },

    {
        title: "The Fault in Our Stars",
        image: "https://img.youtube.com/vi/9ItBvH5J6ss/maxresdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2014,
        rating: 4.5,
        link: "https://www.youtube.com/embed/9ItBvH5J6ss",
        description: "Hazel and Gus, two teenagers with cancer, fall in love while facing their mortality. The trailer teases hope, love, and bittersweet tragedy."
    },
    {
        title: "Dear John",
        image: "https://img.youtube.com/vi/r0fq5dd0C60/maxresdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.1,
        link: "https://www.youtube.com/embed/r0fq5dd0C60",
        description: "A soldier and a college student fall in love, but war and distance challenge their relationship. The trailer reveals longing, sacrifice, and emotional depth."
    },

    {
        title: "Dilwale Dulhania Le Jayenge",
        image: "https://img.youtube.com/vi/cmax1C1p660/hqdefault.jpg",
        category: "romantic_drama",
        language: "hindi",
        type: "movie",
        year: 1995,
        rating: 4.9,
        link: "https://www.youtube.com/embed/cmax1C1p660",
        description: "Raj and Simran’s love blossoms during a European trip, but cultural traditions challenge their union. A timeless Bollywood classic filled with romance, humor, and family values."
    },
    {
        title: "Eternal Sunshine of the Spotless Mind",
        image: "https://img.youtube.com/vi/0zFywiAh7N0/hqdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2004,
        rating: 4.7,
        link: "https://www.youtube.com/embed/0zFywiAh7N0",
        description: "A man undergoes a procedure to erase painful memories of his ex-lover, only to realize the importance of love. The film blends science fiction with deep emotions."
    },
    {
        title: "Her",
        image: "https://img.youtube.com/vi/ne6p6MfLBxc/hqdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2013,
        rating: 4.4,
        link: "https://www.youtube.com/embed/ne6p6MfLBxc",
        description: "A lonely man develops an intimate relationship with an advanced AI operating system. The trailer explores unconventional love, technology, and emotional vulnerability."
    },

    {
        title: "Me Before You",
        image: "https://img.youtube.com/vi/T0MmkG_nG1U/hqdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.5,
        link: "https://www.youtube.com/embed/T0MmkG_nG1U",
        description: "A young caretaker forms a life-changing bond with a paralyzed man. The trailer captures moments of joy, heartbreak, and the transformative power of love."
    },
    {
        title: "Before Sunrise",
        image: "https://img.youtube.com/vi/25v7N34d5HE/hqdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 1995,
        rating: 4.7,
        link: "https://www.youtube.com/embed/25v7N34d5HE",
        description: "Jesse and Céline meet on a train and spend one magical night in Vienna. The trailer explores fleeting romance, connection, and destiny."
    },
    {
        title: "Your Name (Kimi no Na wa)",
        image: "https://img.youtube.com/vi/xU47nhruN-Q/hqdefault.jpg",
        category: "romantic_drama",
        language: "japanese",
        type: "movie",
        year: 2016,
        rating: 4.8,
        link: "https://www.youtube.com/embed/xU47nhruN-Q",
        description: "Two teenagers mysteriously swap bodies and form a deep connection across space and time. The trailer showcases breathtaking visuals and emotional storytelling."
    },
    {
        title: "Weathering with You",
        image: "https://img.youtube.com/vi/Q6iK6DjV_iE/hqdefault.jpg",
        category: "romantic_drama",
        language: "japanese",
        type: "movie",
        year: 2019,
        rating: 4.6,
        link: "https://www.youtube.com/embed/Q6iK6DjV_iE",
        description: "A runaway boy meets a girl who can control the weather. The trailer reveals a touching love story set against themes of sacrifice and hope."
    },



    {
        title: "Eternal Sunshine of the Spotless Mind",
        image: "https://img.youtube.com/vi/07-QBnEkgXU/hqdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2004,
        rating: 4.8,
        link: "https://www.youtube.com/embed/07-QBnEkgXU",
        description: "A couple undergoes a procedure to erase each other from memory, only to rediscover their bond. The trailer highlights surreal imagery and emotional depth."
    },


    {
        title: "Amélie",
        image: "https://img.youtube.com/vi/HUECWi5pX7o/hqdefault.jpg",
        category: "romantic_drama",
        language: "french",
        type: "movie",
        year: 2001,
        rating: 4.6,
        link: "https://www.youtube.com/embed/HUECWi5pX7o",
        description: "A whimsical Parisian girl decides to change the lives of those around her while seeking love for herself. The trailer captures charm, romance, and magic."
    },
    {
        title: "Portrait of a Lady on Fire",
        image: "https://img.youtube.com/vi/6JnFaltqnAY/hqdefault.jpg",
        category: "romantic_drama",
        language: "french",
        type: "movie",
        year: 2019,
        rating: 4.8,
        link: "https://www.youtube.com/embed/6JnFaltqnAY",
        description: "An artist falls in love with her subject in 18th-century France. The film is a passionate tale of forbidden love and artistic intimacy."
    },
    {
        title: "Cinema Paradiso",
        image: "https://img.youtube.com/vi/C2-GX0Tltgw/hqdefault.jpg",
        category: "romantic_drama",
        language: "italian",
        type: "movie",
        year: 1988,
        rating: 4.9,
        link: "https://www.youtube.com/embed/C2-GX0Tltgw",
        description: "A filmmaker recalls his childhood friendship with a projectionist and his first love. The trailer showcases nostalgia, romance, and the magic of cinema."
    },
    {
        title: "Roja",
        image: "https://img.youtube.com/vi/LrcwQfOSxjg/hqdefault.jpg",
        category: "romantic_drama",
        language: "tamil",
        type: "movie",
        year: 1992,
        rating: 4.7,
        link: "https://www.youtube.com/embed/LrcwQfOSxjg",
        description: "An idealistic young man falls for a village girl who becomes the target of a political upheaval.\nMani Ratnam’s classic blends romance with sociopolitical themes.\nAR Rahman’s music elevates the emotions of love and conflict.\nThe trailer highlights dramatic landscapes, musical motifs, and emotional tension."
    },

    {
        title: "Young Goethe in Love",
        image: "https://img.youtube.com/vi/IqLvKhL2HbQ/hqdefault.jpg",
        category: "romantic_drama",
        language: "german",
        type: "movie",
        year: 2011,
        rating: 4.3,
        link: "https://www.youtube.com/embed/IqLvKhL2HbQ",
        description: "This period romance follows young Johann Goethe, torn between poetry and propriety, when he falls for Lotte. \nSet against late 18th-century Germany, their love blooms under constrained societal expectations. \nThe trailer teases budding romance, poetic longing, and dramatic tension. \nIt highlights Goethe’s inner conflict and heartfelt moments of connection."
    },
    {
        title: "Beloved Sisters",
        image: "https://img.youtube.com/vi/ak3bE4-sxMY/hqdefault.jpg",
        category: "romantic_drama",
        language: "german",
        type: "movie",
        year: 2014,
        rating: 4.2,
        link: "https://www.youtube.com/embed/ak3bE4-sxMY",
        description: "An emotionally complex love triangle among poet Friedrich Schiller and two aristocratic sisters. \nSet in Enlightenment-era Germany, the film explores passion, jealousy, and societal constraints. \nThe trailer portrays elegant settings, tender glances, and deep emotional stakes. \nIt strands desire, rivalry, and the heartbreak of divided affection."
    },
    {
        title: "Suite Française",
        image: "https://img.youtube.com/vi/B-9B1gfvqLE/hqdefault.jpg",
        category: "romantic_drama",
        language: "french",
        type: "movie",
        year: 2014,
        rating: 4.4,
        link: "https://www.youtube.com/embed/B-9B1gfvqLE",
        description: "A forbidden romance kindles between a French villager and her German occupier during WWII. \nThe film explores love, loyalty, and survival under wartime occupation. \nThe trailer underscores tension, longing glances, and impossible emotions. \nIt balances heartbreak with the risk of forbidden affection."
    },
    {
        title: "I'm Your Man",
        image: "https://img.youtube.com/vi/xXz9jIKojDk/hqdefault.jpg",
        category: "romantic_drama",
        language: "german",
        type: "movie",
        year: 2021,
        rating: 4.5,
        link: "https://www.youtube.com/embed/xXz9jIKojDk",
        description: "A scientist participates in a study living with a humanoid robot tailored to be her perfect partner. \nThis playful romance questions what it means to find true connection. \nThe trailer blends dry humor, futuristic tech, and emotional tension. \nIt highlights human longing, artificial intimacy, and unexpected chemistry."
    },
    {
        title: "Past Lives",
        image: "https://img.youtube.com/vi/kA244xewjcI/hqdefault.jpg",
        category: "romantic_drama",
        language: "english",
        type: "movie",
        year: 2023,
        rating: 4.8,
        link: "https://www.youtube.com/embed/kA244xewjcI",
        description: "Childhood sweethearts reconnect decades later, exploring fate and what could have been. \nA subtle and deeply emotional story about love, memory, and cultural ties. \nThe trailer evokes nostalgia, intimate moments, and restrained longing. \nIt captures yearning, quiet tension, and the pull of the past."
    },
    {
        title: "Thinkalazhcha Nishchayam",
        image: "https://img.youtube.com/vi/m-AyD3LkigE/hqdefault.jpg",
        category: "romantic_drama",
        language: "malayalam",
        type: "movie",
        year: 2021,
        rating: 4.6,
        link: "https://www.youtube.com/embed/m-AyD3LkigE",
        description: "Set in Kanhangad, this slice-of-life drama unfolds around a family engagement full of secrets and social nuances. It merges heartwarming comedy with a grounded portrayal of familial relationships. \nThe trailer captures everyday conflicts, regional authenticity, and a strong sense of place. \nIt highlights the film’s tone—subtle humor, emotional depth, and cultural specificity. \nAcclaimed for winning Best Malayalam Feature at the National Awards, it’s a modern classic in realism. (Sources: :contentReference[oaicite:0]{index=0})"
    },
    {
        title: "Little Miss Rawther",
        image: "https://img.youtube.com/vi/sTnY-g1YaUo/hqdefault.jpg",
        category: "romantic_drama",
        language: "malayalam",
        type: "movie",
        year: 2023,
        rating: 4.3,
        link: "https://www.youtube.com/embed/sTnY-g1YaUo",
        description: "A quirky and heartwarming love story between a petite woman and a tall man navigating societal expectations. The trailer brings out their charming chemistry and playful tensions. \nTouched with humor and emotional resonance, it challenges conventional tropes in romantic drama. \nThe high-contrast physicality of the leads adds visual whimsy to their emotional connection. \nCelebrated as a refreshing entry in contemporary Malayalam romance. (Sources: :contentReference[oaicite:1]{index=1})"
    },
    {
        title: "100 Days of Love",
        image: "https://img.youtube.com/vi/kVrqfYjkTdQ/hqdefault.jpg",
        category: "romantic_drama",
        language: "malayalam",
        type: "movie",
        year: 2015,
        rating: 4.5,
        link: "https://www.youtube.com/embed/kVrqfYjkTdQ",
        description: "Starring Dulquer Salmaan and Nithya Menen, this film is a dreamy romantic comedy that feels like a revisited fairytale. The trailer sets a whimsical tone with picturesque visuals and a sense of playful destiny. \nIt blends lighthearted romance with nuanced emotional beats—destiny, awkward confession, and tender yearning. \nScored with a memorable soundtrack by Govind Vasantha, it’s visually and musically captivating. \nRegarded as an underrated gem by audiences who revisit its warmth. (Sources: :contentReference[oaicite:2]{index=2})"
    },
    {
        title: "Premam",
        image: "https://img.youtube.com/vi/dZs_cLHfnNA/hqdefault.jpg",
        category: "romantic_drama",
        language: "malayalam",
        type: "movie",
        year: 2015,
        rating: 4.8,
        link: "https://www.youtube.com/embed/dZs_cLHfnNA",
        description: "One of the most iconic Malayalam romances, Premam tells the story of George and his journey through love in three stages of life. \nThe film balances innocence, heartbreak, and maturity with vibrant music and youthful energy. \nIts cult status comes from unforgettable characters like Malar teacher and unforgettable songs. \nThe trailer showcases charm, nostalgia, and a celebration of first loves."
    },
    {
        title: "96",
        image: "https://img.youtube.com/vi/rTuxUAuJRyY/hqdefault.jpg",
        category: "romantic_drama",
        language: "tamil",
        type: "movie",
        year: 2018,
        rating: 4.9,
        link: "https://www.youtube.com/embed/rTuxUAuJRyY",
        description: "A soulful love story between childhood sweethearts Ram and Jaanu, who reunite after years at a school reunion. \nThe film beautifully captures nostalgia, unspoken emotions, and bittersweet memories. \nVijay Sethupathi and Trisha deliver some of their career-best performances. \nThe trailer hints at love, longing, and heartbreak with mesmerizing visuals and music."
    },


    {
        title: "Baahubali",
        image: "https://img.youtube.com/vi/3NQRhE772b0/hqdefault.jpg",
        category: "historical_drama",
        language: "tamil",
        type: "movie",
        year: 2018,
        rating: 4.7,
        link: "https://www.youtube.com/embed/3NQRhE772b0",
        description: "A powerful love story set against the backdrop of caste discrimination in Tamil Nadu. \nIt tells the tale of Pariyerum Perumal, a law student, and his friendship with Jothi. \nTheir bond blossoms into love amidst societal barriers. \nThe trailer emphasizes realism, raw emotions, and strong social commentary."
    },
    {
        title: "The Conjuring",
        image: "https://img.youtube.com/vi/k10ETZ41q5o/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "movie",
        year: 2013,
        rating: 4.7,
        link: "https://www.youtube.com/embed/k10ETZ41q5o",
        description: "Based on real-life paranormal investigators Ed and Lorraine Warren, 'The Conjuring' follows the terrifying haunting of a farmhouse. \nThe film combines jump scares with deep psychological horror. \nIts trailer is chilling, filled with eerie visuals and an ominous tone. \nThis movie set the benchmark for modern horror storytelling."
    },
    {
        title: "Insidious",
        image: "https://img.youtube.com/vi/zuZnRUcoWos/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.5,
        link: "https://www.youtube.com/embed/zuZnRUcoWos",
        description: "A family moves into a new house only to discover their son is trapped in a terrifying astral plane called 'The Further'. \nThe film blends supernatural scares with emotional depth. \nIts trailer delivers eerie tension and sudden shocks. \nJames Wan creates a haunting atmosphere that lingers beyond the screen."
    },


    {
        title: "Hereditary",
        image: "https://img.youtube.com/vi/V6wWKNij_1M/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "movie",
        year: 2018,
        rating: 4.7,
        link: "https://www.youtube.com/embed/V6wWKNij_1M",
        description: "A disturbing tale of a family unraveling after the death of their matriarch. \nThe film explores grief, cults, and chilling supernatural elements. \nIts trailer teases eerie visuals and intense psychological horror. \nAri Aster’s film redefined the modern horror landscape."
    },

    {
        title: "Train to Busan",
        image: "https://img.youtube.com/vi/pyWuHv2-Abk/hqdefault.jpg",
        category: "horror",
        language: "korean",
        type: "movie",
        year: 2016,
        rating: 4.8,
        link: "https://www.youtube.com/embed/pyWuHv2-Abk",
        description: "A gripping zombie apocalypse thriller set on a moving train. \nThe movie blends horror with themes of survival, family, and sacrifice. \nIts trailer is filled with tension, chaos, and heart-stopping moments. \nOne of the most successful Korean horror films globally."
    },

    {
        title: "It",
        image: "https://img.youtube.com/vi/xKJmEC5ieOk/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 4.7,
        link: "https://www.youtube.com/embed/xKJmEC5ieOk",
        description: "A terrifying adaptation of Stephen King's novel, featuring Pennywise the Clown. \nThe story revolves around children facing their deepest fears in Derry. \nThe trailer is filled with suspenseful sequences, chilling visuals, and jump scares. \nIt has become one of the most iconic modern horror films globally."
    },

    {
        title: "The Witch",
        image: "https://img.youtube.com/vi/iQXmlf3Sefg/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.6,
        link: "https://www.youtube.com/embed/iQXmlf3Sefg",
        description: "Set in 1630s New England, a family is torn apart by dark supernatural forces. \nThe film focuses on paranoia, religion, and witchcraft. \nThe trailer highlights eerie forests, sinister rituals, and creeping dread. \nThe Witch is lauded for its authentic period detail and psychological horror."
    },

    {
        title: "Get Out",
        image: "https://img.youtube.com/vi/DzfpyUB60YY/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 4.8,
        link: "https://www.youtube.com/embed/DzfpyUB60YY",
        description: "A psychological horror about a Black man visiting his white girlfriend's family, uncovering sinister secrets. \nThe film blends social commentary, suspense, and supernatural elements. \nThe trailer teases chilling encounters, tension, and horrifying twists. \nGet Out is considered one of the smartest modern horror films."
    },

    {
        title: "Shutter Island",
        image: "https://img.youtube.com/vi/5iaYLCiq5RM/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.4,
        link: "https://www.youtube.com/embed/5iaYLCiq5RM",
        description: "A psychological horror about a U.S. Marshal investigating a psychiatric facility on an isolated island. \nThe trailer reveals suspenseful encounters, mysterious patients, and dark secrets. \nShutter Island blends mystery, thriller, and horror for a gripping experience. \nLeonardo DiCaprio delivers a stellar performance as the troubled investigator."
    },

    {
        title: "The Haunting of Hill House",
        image: "https://img.youtube.com/vi/3eqxXqJDmcY/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "series",
        year: 2018,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=3eqxXqJDmcY",
        description: "A modern reimagining of Shirley Jackson's classic novel, this series follows five adult siblings whose paranormal experiences at Hill House continue to haunt them in the present day, while they revisit events from their childhood."
    },
    {
        title: "Tumbbad",
        image: "https://img.youtube.com/vi/YGIcZrUBY0k/hqdefault.jpg",
        category: "horror",
        language: "hindi",
        type: "movie",
        year: 2018,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=YGIcZrUBY0k",
        description: "Set in 1918, this film follows a man’s search for a hidden treasure in the village of Tumbbad, Maharashtra, which leads him to confront a dangerous and ancient supernatural force."
    },
    {
        title: "The Exorcist",
        image: "https://img.youtube.com/vi/BU2eYAO31Cc/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "movie",
        year: 1973,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=BU2eYAO31Cc",
        description: "When a young girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter. A chilling tale of demonic possession that has become a horror classic."
    },
    {
        title: "Phone",
        image: "https://img.youtube.com/vi/GOY1gXV5Vao/hqdefault.jpg",
        category: "horror",
        language: "korean",
        type: "movie",
        year: 2002,
        rating: 4.3,
        link: "https://www.youtube.com/watch?v=GOY1gXV5Vao",
        description: "A journalist receives a mysterious phone call that leads her to investigate a series of disturbing events, uncovering a terrifying secret tied to her own past."
    },
    {
        title: "The Wailing",
        image: "https://img.youtube.com/vi/VUWAgbXSJ4Y/hqdefault.jpg",
        category: "horror",
        language: "korean",
        type: "movie",
        year: 2016,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=VUWAgbXSJ4Y",
        description: "A stranger arrives in a small village, and a mysterious sickness begins to spread. A local policeman investigates the events, uncovering dark secrets and supernatural forces."
    },
    {
        title: "The Mist",
        image: "https://img.youtube.com/vi/LhCKXJNGzN8/hqdefault.jpg",
        category: "horror",
        language: "english",
        type: "movie",
        year: 2007,
        rating: 4.2,
        link: "https://www.youtube.com/watch?v=LhCKXJNGzN8",
        description: "After a violent storm, a group of people are trapped in a supermarket by a mysterious mist filled with deadly creatures. As tensions rise, they must confront both external and internal horrors."
    },


    {
        title: "Gladiator",
        image: "https://img.youtube.com/vi/owK1qxDselE/hqdefault.jpg",
        category: "historical_drama",
        language: "english",
        type: "movie",
        year: 2000,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=owK1qxDselE",
        description: "Maximus, a Roman general, seeks vengeance after being betrayed and enslaved. \nThe film showcases epic battles, political intrigue, and loyalty. \nRussell Crowe delivers an unforgettable performance. \nGladiator remains a landmark in historical epic cinema."
    },
    {
        title: "Schindler's List",
        image: "https://img.youtube.com/vi/gG22XNhtnoY/hqdefault.jpg",
        category: "historical_drama",
        language: "english",
        type: "movie",
        year: 1993,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=gG22XNhtnoY",
        description: "The true story of Oskar Schindler, who saved over a thousand Jews during the Holocaust. \nA powerful narrative about courage, morality, and sacrifice. \nSteven Spielberg directs with masterful attention to detail. \nThe film won seven Academy Awards, including Best Picture."
    },

    {
        title: "12 Years a Slave",
        image: "https://img.youtube.com/vi/z02Ie8wKKRg/hqdefault.jpg",
        category: "historical_drama",
        language: "english",
        type: "movie",
        year: 2013,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=z02Ie8wKKRg",
        description: "The true story of Solomon Northup, a free African-American man kidnapped into slavery. \nThe film portrays resilience, injustice, and human suffering. \nChiwetel Ejiofor delivers a deeply moving performance. \n12 Years a Slave won the Academy Award for Best Picture."
    },
    {
        title: "Dunkirk",
        image: "https://img.youtube.com/vi/F-eMt3SrfFU/hqdefault.jpg",
        category: "historical_drama",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=F-eMt3SrfFU",
        description: "Allied soldiers are evacuated from Dunkirk during World War II amidst enemy attacks. \nChristopher Nolan crafts tension with minimal dialogue and immersive visuals. \nThe film depicts courage, survival, and heroism under fire. \nDunkirk is celebrated for its technical mastery and suspense."
    },
    {
        title: "Troy",
        image: "https://img.youtube.com/vi/znTLzRJimeY/hqdefault.jpg",
        category: "historical_drama",
        language: "english",
        type: "movie",
        year: 2004,
        rating: 4.4,
        link: "https://www.youtube.com/watch?v=znTLzRJimeY",
        description: "During the Trojan War, Achilles faces moral dilemmas, love, and vengeance. \nEpic battles and heroic feats define the narrative. \nBrad Pitt stars as the legendary warrior. \nTroy blends myth, history, and emotional drama with grandeur."
    },

    {
        title: "Amadeus",
        image: "https://img.youtube.com/vi/yIzhAKtEzY0/hqdefault.jpg",
        category: "historical_drama",
        language: "english",
        type: "movie",
        year: 1984,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=yIzhAKtEzY0",
        description: "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent."
    },

    {
        title: "Braveheart",
        image: "https://img.youtube.com/vi/1NJO0jxBtMo/hqdefault.jpg",
        category: "historical_drama",
        language: "english",
        type: "movie",
        year: 1995,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=1NJO0jxBtMo",
        description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England."
    },
    {
        title: "The King's Speech",
        image: "https://img.youtube.com/vi/EcxBrTvLbBM/hqdefault.jpg",
        category: "historical_drama",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=EcxBrTvLbBM",
        description: "The story of King George VI of the United Kingdom's unexpected ascension to the throne and the speech therapist who helped the unsure monarch overcome his stammer."
    },
    {
        title: "Dangal",
        image: "https://img.youtube.com/vi/x_7YlGv9u1g/hqdefault.jpg",
        category: "historical_drama",
        language: "hindi",
        type: "movie",
        year: 2016,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=x_7YlGv9u1g",
        description: "Former wrestler Mahavir Singh Phogat trains his young daughters Geeta and Babita to become India's first world-class female wrestlers."
    },
    {
        title: "Lagaan",
        image: "https://img.youtube.com/vi/oSIGQ0YkFxs/hqdefault.jpg",
        category: "historical_drama",
        language: "hindi",
        type: "movie",
        year: 2001,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=oSIGQ0YkFxs",
        description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers."
    },

    {
        title: "3 Idiots",
        image: "https://img.youtube.com/vi/K0eDlFX9GMc/hqdefault.jpg",
        category: "comedy_drama",
        language: "hindi",
        type: "movie",
        year: 2009,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=K0eDlFX9GMc",
        description: "Two friends embark on a journey to find their long-lost college buddy, reminiscing about their days challenging the rigid education system with his unique philosophy."
    },

    {
        title: "The Truman Show",
        image: "https://img.youtube.com/vi/dlnmQbPGuls/hqdefault.jpg",
        category: "comedy_drama",
        language: "english",
        type: "movie",
        year: 1998,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=dlnmQbPGuls",
        description: "An insurance salesman discovers his entire life is actually a popular reality TV show, and he must decide whether to break free from the constructed world."
    },
    {
        title: "Little Miss Sunshine",
        image: "https://img.youtube.com/vi/wvwVkllXT80/hqdefault.jpg",
        category: "comedy_drama",
        language: "english",
        type: "movie",
        year: 2006,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=wvwVkllXT80",
        description: "A dysfunctional family embarks on a cross-country road trip in their old VW bus to get their young daughter to a beauty pageant, with hilarious and heartfelt results."
    },
    {
        title: "Juno",
        image: "https://img.youtube.com/vi/K0SKf0K3bxg/hqdefault.jpg",
        category: "comedy_drama",
        language: "english",
        type: "movie",
        year: 2007,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=K0SKf0K3bxg",
        description: "A whip-smart teenage girl navigates an unplanned pregnancy and the subsequent adoption process with her quirky family and the baby's nervous father."
    },
    {
        title: "The Intouchables",
        image: "https://img.youtube.com/vi/34WIbmXkewU/hqdefault.jpg",
        category: "comedy_drama",
        language: "french",
        type: "movie",
        year: 2011,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=34WIbmXkewU",
        description: "An unlikely friendship blossoms between a wealthy quadriplegic man and his caregiver from the projects, filled with irreverent humor and profound connection."
    },
    {
        title: "Amélie",
        image: "https://img.youtube.com/vi/HUECWi5pX7o/hqdefault.jpg",
        category: "comedy_drama",
        language: "french",
        type: "movie",
        year: 2001,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=HUECWi5pX7o",
        description: "A whimsical and shy waitress in Paris decides to secretly improve the lives of those around her, while struggling to find her own happiness and love."
    },

    {
        title: "Forrest Gump",
        image: "https://img.youtube.com/vi/XHhAG-YLdk8/hqdefault.jpg",
        category: "comedy_drama",
        language: "english",
        type: "movie",
        year: 1994,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=XHhAG-YLdk8",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with a low IQ."
    },
    {
        title: "The Grand Budapest Hotel",
        image: "https://img.youtube.com/vi/1Fg5iWmQjwk/hqdefault.jpg",
        category: "comedy_drama",
        language: "english",
        type: "movie",
        year: 2014,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
        description: "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend."
    },



    {
        title: "Midnight in Paris",
        image: "https://img.youtube.com/vi/FAfR8omt-CY/hqdefault.jpg",
        category: "comedy_drama",
        language: "english",
        type: "movie",
        year: 2011,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=FAfR8omt-CY",
        description: "A nostalgic screenwriter finds himself mysteriously transported to the 1920s every night at midnight, meeting his artistic heroes in 1920s Paris."
    },




    {
        title: "Vikram Vedha",
        image: "https://img.youtube.com/vi/1sVr-uWZPjE/hqdefault.jpg",
        category: "crime_drama",
        language: "tamil",
        type: "movie",
        year: 2017,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=1sVr-uWZPjE",
        description: "A tough cop hunts down a clever and philosophical gangster. The line between right and wrong blurs in this cat-and-mouse game filled with gritty drama and witty exchanges."
    },


    {
        title: "Jojo Rabbit",
        image: "https://img.youtube.com/vi/tL4McUzXfFI/hqdefault.jpg",
        category: "comedy_drama",
        language: "english",
        type: "movie",
        year: 2019,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=tL4McUzXfFI",
        description: "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home, challenging his worldview with humor and heart."
    },

    {
        title: "Lady Bird",
        image: "https://img.youtube.com/vi/cNi_HC839Wo/hqdefault.jpg",
        category: "comedy_drama",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=cNi_HC839Wo",
        description: "A strong-willed teenager navigates a loving but turbulent relationship with her mother during her final year of high school in Sacramento."
    },

    {
        title: "Minions",
        image: "https://img.youtube.com/vi/dVDk7PXNXB8/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=dVDk7PXNXB8",
        description: "Minions Stuart, Kevin, and Bob embark on a thrilling journey to find a new evil boss for their tribe to serve, leading them to Scarlet Overkill."
    },
    {
        title: "Inside Out",
        image: "https://img.youtube.com/vi/yRUAzGQ3nSY/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=yRUAzGQ3nSY",
        description: "Young Riley's emotions—Joy, Fear, Anger, Disgust, and Sadness—conflict on how to navigate a new city, house, and school in this animated comedy-drama."
    },
    {
        title: "Up",
        image: "https://img.youtube.com/vi/qas5lWp7_R0/hqdefault.jpg",
        category: "comedy_drama",
        language: "english",
        type: "movie",
        year: 2009,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=qas5lWp7_R0",
        description: "78-year-old Carl Fredricksen fulfills his dream of a great adventure by tying thousands of balloons to his house and flying to South America."
    },
    {
        title: "Gone Girl",
        image: "https://img.youtube.com/vi/2-_-1nJf8Vg/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 2014,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=2-_-1nJf8Vg",
        description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
    },
    {
        title: "Shutter Island",
        image: "https://img.youtube.com/vi/5iaYLCiq5RM/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=5iaYLCiq5RM",
        description: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane, uncovering a shocking personal truth."
    },
    {
        title: "Black Swan",
        image: "https://img.youtube.com/vi/5jaI1XOB-bs/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=5jaI1XOB-bs",
        description: "A committed dancer wins the lead role in a production of Tchaikovsky's 'Swan Lake' only to find herself struggling to maintain her sanity as she becomes increasingly paranoid."
    },

    {
        title: "Zodiac",
        image: "https://img.youtube.com/vi/yNncHPl1UXg/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 2007,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=yNncHPl1UXg",
        description: "In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California."
    },
    {
        title: "Oldboy",
        image: "https://img.youtube.com/vi/2HkjrJ6IK5E/hqdefault.jpg",
        category: "psychological_thriller",
        language: "korean",
        type: "movie",
        year: 2003,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=2HkjrJ6IK5E",
        description: "After being kidnapped and imprisoned for 15 years, a man is released, only to find that he must find his captor in 5 days to discover the reason for his imprisonment and get revenge."
    },

    {
        title: "The Silence of the Lambs",
        image: "https://img.youtube.com/vi/W6Mm8Sbe__o/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 1991,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer who skins his victims."
    },
    {
        title: "Se7en",
        image: "https://img.youtube.com/vi/znmZoVkCjpI/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 1995,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=znmZoVkCjpI",
        description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives in a dark, rain-soaked metropolis."
    },
    {
        title: "Psycho",
        image: "https://img.youtube.com/vi/DTJQfFQ40lI/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 1960,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=DTJQfFQ40lI",
        description: "A Phoenix secretary embezzles money and ends up at a remote motel run by a young man under the domination of his mother, leading to one of cinema's most infamous scenes."
    },


    {
        title: "The Girl with the Dragon Tattoo",
        image: "https://img.youtube.com/vi/DqQe3OrsMKI/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 2011,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=DqQe3OrsMKI",
        description: "A journalist is aided by a young female hacker in his search for the killer of a woman who has been dead for 40 years, uncovering a dark family history."
    },

    {
        title: "Coherence",
        image: "https://img.youtube.com/vi/sEceDz1Rodc/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 2013,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=sEceDz1Rodc",
        description: "Strange things begin to happen when a group of friends gather for a dinner party on an night when a comet is passing overhead, fracturing their reality."
    },

    {
        title: "Parasite",
        image: "https://img.youtube.com/vi/5xH0HfJHsaY/hqdefault.jpg",
        category: "psychological_thriller",
        language: "korean",
        type: "movie",
        year: 2019,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan in this dark social satire."
    },
    {
        title: "Memento",
        image: "https://img.youtube.com/vi/4CV41hoyS8A/hqdefault.jpg",
        category: "psychological_thriller",
        language: "english",
        type: "movie",
        year: 2000,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=4CV41hoyS8A",
        description: "A man with short-term memory loss uses notes and tattoos to hunt for the man he believes killed his wife, in a story told in reverse chronological order."
    },


    {
        title: "A Quiet Place",
        image: "https://img.youtube.com/vi/WR7cc5t7tv8/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2018,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=WR7cc5t7tv8",
        description: "In a post-apocalyptic world, a family must navigate their lives in silence to avoid mysterious creatures that hunt by sound."
    },
    {
        title: "Don't Breathe",
        image: "https://img.youtube.com/vi/76yBTNDB6vU/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=76yBTNDB6vU",
        description: "A group of friends break into the house of a wealthy blind man, thinking they'll get away with the perfect heist, but they're wrong."
    },

    {
        title: "Train to Busan",
        image: "https://img.youtube.com/vi/pyWuHv2-Abk/hqdefault.jpg",
        category: "thriller",
        language: "korean",
        type: "movie",
        year: 2016,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=pyWuHv2-Abk",
        description: "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan."
    },
    {
        title: "I Saw the Devil",
        image: "https://img.youtube.com/vi/xwWgp1bqVwE/hqdefault.jpg",
        category: "thriller",
        language: "korean",
        type: "movie",
        year: 2010,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=xwWgp1bqVwE",
        description: "A secret agent exacts revenge on a serial killer through a series of captures and releases in this brutal cat-and-mouse game."
    },



    {
        title: "John Wick",
        image: "https://img.youtube.com/vi/C0BMx-qxsP4/hqdefault.jpg",
        category: "crime_drama",
        language: "english",
        type: "movie",
        year: 2014,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
        description: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and took everything from him."
    },
    {
        title: "No Country for Old Men",
        image: "https://img.youtube.com/vi/38A__WT3-o0/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2007,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=38A__WT3-o0",
        description: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande."
    },
    {
        title: "Sicario",
        image: "https://img.youtube.com/vi/sR0SDT2GeFg/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=sR0SDT2GeFg",
        description: "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico."
    },


    {
        title: "The Black Phone",
        image: "https://img.youtube.com/vi/3eGP6im8AZA/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2021,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=3eGP6im8AZA",
        description: "A kidnapped boy receives help from the previous victims of his masked captor through a mysterious disconnected phone in the basement."
    },

    {
        title: "The Contractor",
        image: "https://img.youtube.com/vi/e7glvM8Xh0w/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2022,
        rating: 4.2,
        link: "https://www.youtube.com/watch?v=e7glvM8Xh0w",
        description: "A discharged U.S. Army Special Forces sergeant joins a private contracting organization only to find himself embroiled in a dangerous conspiracy."
    },
    {
        title: "The Batman",
        image: "https://img.youtube.com/vi/mqqft2x_Aa4/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2022,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
        description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption."
    },
    {
        title: "Uncharted",
        image: "https://img.youtube.com/vi/eHp3MbsCbMg/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2022,
        rating: 4.3,
        link: "https://www.youtube.com/watch?v=eHp3MbsCbMg",
        description: "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor Sullivan to recover a fortune lost by Magellan 500 years ago."
    },
    {
        title: "The Gray Man",
        image: "https://img.youtube.com/vi/BmllggGO4pM/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2022,
        rating: 4.4,
        link: "https://www.youtube.com/watch?v=BmllggGO4pM",
        description: "When the CIA's most skilled operative accidentally uncovers dark agency secrets, a global manhunt begins by international assassins."
    },
    {
        title: "Bullet Train",
        image: "https://img.youtube.com/vi/0IOsk2Vlc4o/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2022,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=0IOsk2Vlc4o",
        description: "Five assassins aboard a fast-moving bullet train find out their missions have something in common in this action-packed thriller."
    },

    {
        title: "The Northman",
        image: "https://img.youtube.com/vi/oMSdFM12hOw/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2022,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=oMSdFM12hOw",
        description: "A young Viking prince sets out on a quest to avenge his father's murder in this epic historical thriller."
    },

    {
        title: "Wrath of Man",
        image: "https://img.youtube.com/vi/EFYEni2gsK0/hqdefault.jpg",
        category: "thriller",
        language: "english",
        type: "movie",
        year: 2021,
        rating: 4.4,
        link: "https://www.youtube.com/watch?v=EFYEni2gsK0",
        description: "A mysterious and wild-eyed security guard surprises his coworkers when he unleashes precision skills during a heist at his cash truck company."
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        image: "https://img.youtube.com/vi/V75dMMIW2B4/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2001,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=V75dMMIW2B4",
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        image: "https://img.youtube.com/vi/VyHV0BRtdxo/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2001,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
        description: "An orphaned boy discovers he's a wizard and begins his education at Hogwarts School of Witchcraft and Wizardry, uncovering secrets about his parents' past."
    },
    {
        title: "Pan's Labyrinth",
        image: "https://img.youtube.com/vi/E7XGNPXdlGQ/hqdefault.jpg",
        category: "fantasy",
        language: "spanish",
        type: "movie",
        year: 2006,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=E7XGNPXdlGQ",
        description: "In the fascist Spain of 1944, a young girl escapes into an eerie but captivating fantasy world that mirrors her dark reality."
    },


    {
        title: "Avatar",
        image: "https://img.youtube.com/vi/5PSNL1qE6VY/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2009,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    },
    {
        title: "The Shape of Water",
        image: "https://img.youtube.com/vi/XFYWazblaUA/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2017,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=XFYWazblaUA",
        description: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity."
    },


    {
        title: "Labyrinth",
        image: "https://img.youtube.com/vi/XRcOZZDvMv4/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 1986,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=XRcOZZDvMv4",
        description: "A 16-year-old girl must solve a labyrinth to rescue her baby brother from the Goblin King who has given her thirteen hours to solve the maze."
    },


    {
        title: "The Lord of the Rings: The Two Towers",
        image: "https://img.youtube.com/vi/LbfMDwc4azU/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2002,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=LbfMDwc4azU",
        description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman."
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        image: "https://img.youtube.com/vi/r5X-hFf6Bwo/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2003,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        image: "https://img.youtube.com/vi/1bq0qff4iF8/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2002,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=1bq0qff4iF8",
        description: "Harry and his friends must uncover the truth behind the mysterious Chamber of Secrets that threatens the safety of Hogwarts students."
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        image: "https://img.youtube.com/vi/lAxgztbYDbs/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2004,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=lAxgztbYDbs",
        description: "Harry learns that Sirius Black has escaped from Azkaban prison and is coming for him, while discovering new magical secrets and time-bending adventures."
    },
    {
        title: "The Hobbit: An Unexpected Journey",
        image: "https://img.youtube.com/vi/SDnYMbYB-nU/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2012,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=SDnYMbYB-nU",
        description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home from a dragon."
    },
    {
        title: "My Neighbor Totoro",
        image: "https://img.youtube.com/vi/92a7Hj0ijLs/hqdefault.jpg",
        category: "Kids",
        language: "japanese",
        type: "movie",
        year: 1988,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=92a7Hj0ijLs",
        description: "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby."
    },

    {
        title: "Coraline",
        image: "https://img.youtube.com/vi/m9bOpeuvNwY/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2009,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=m9bOpeuvNwY",
        description: "An adventurous girl finds another world that is eerily similar to her own, but much better—until its inhabitants try to keep her there forever."
    },

    {
        title: "Miss Peregrine's Home for Peculiar Children",
        image: "https://img.youtube.com/vi/tV_IhWE4LP0/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.4,
        link: "https://www.youtube.com/watch?v=tV_IhWE4LP0",
        description: "A boy discovers clues to a mystery that spans different worlds and times, leading him to an orphanage known as Miss Peregrine's Home for Peculiar Children."
    },
    {
        title: "A Monster Calls",
        image: "https://img.youtube.com/vi/R2Xbo-irtBA/hqdefault.jpg",
        category: "fantasy",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=R2Xbo-irtBA",
        description: "A boy seeks the help of a tree monster to cope with his single mother's terminal illness and the bullying of his classmates."
    },

    {
        title: "Onward",
        image: "https://img.youtube.com/vi/gn5QmllRCn4/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2020,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=gn5QmllRCn4",
        description: "Two elf brothers embark on an extraordinary quest to discover if there is still a little magic left in the world to spend one last day with their father."
    },
    {
        title: "The Social Dilemma",
        image: "https://img.youtube.com/vi/uaaC57tcci0/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2020,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=uaaC57tcci0",
        description: "Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations. The trailer shows how social media manipulates behavior. A thought-provoking Netflix documentary that questions digital addiction."
    },
    {
        title: "My Octopus Teacher",
        image: "https://img.youtube.com/vi/3s0LTDhqe5A/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2020,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=3s0LTDhqe5A",
        description: "A filmmaker forges a remarkable friendship with an octopus living in a South African kelp forest. The trailer highlights beauty, survival, and human connection with nature. Won the Academy Award for Best Documentary Feature."
    },
    {
        title: "13th",
        image: "https://img.youtube.com/vi/krfcq5pF8u8/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=krfcq5pF8u8",
        description: "Directed by Ava DuVernay, this film explores the history of racial inequality in the United States. The trailer focuses on mass incarceration and systemic injustice. Powerful interviews and archival footage make it an eye-opening experience."
    },
    {
        title: "Inside Job",
        image: "https://img.youtube.com/vi/T2IaJwkqgPk/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=T2IaJwkqgPk",
        description: "A documentary that analyzes the 2008 global financial crisis, narrated by Matt Damon. The trailer shows shocking insights into corruption and greed in the banking industry. Inside Job won the Academy Award for Best Documentary Feature."
    },

    {
        title: "An Inconvenient Truth",
        image: "https://img.youtube.com/vi/wnjx6KETmi4/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2006,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=wnjx6KETmi4",
        description: "Former U.S. Vice President Al Gore’s campaign to educate the world about climate change. The trailer emphasizes alarming facts and solutions. A groundbreaking documentary that inspired global awareness about environmental issues."
    },
    {
        title: "American Factory",
        image: "https://img.youtube.com/vi/m36QeKOJ2Fc/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2019,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=m36QeKOJ2Fc",
        description: "A Chinese billionaire reopens a factory in Ohio, leading to a clash of cultures. The trailer shows tensions between American and Chinese work ethics. Produced by Barack and Michelle Obama, this won the Academy Award for Best Documentary."
    },
    {
        title: "Free Solo",
        image: "https://img.youtube.com/vi/urRVZ4SW7WU/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2018,
        rating: 4.9,
        link: "https://www.youtube.com/watch?v=urRVZ4SW7WU",
        description: "Follows Alex Honnold as he attempts to free climb El Capitan without ropes. The trailer shows breathtaking shots of sheer rock faces. Free Solo is an adrenaline-filled, visually stunning documentary that won the Academy Award."
    },
    {
        title: "The Act of Killing",
        image: "https://img.youtube.com/vi/SD5oMxbMcHM/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2012,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=SD5oMxbMcHM",
        description: "Former Indonesian death squad leaders reenact their real-life mass killings in cinematic styles. The trailer showcases disturbing yet surreal portrayals. A haunting documentary that questions morality, memory, and history."
    },
    {
        title: "Seaspiracy",
        image: "https://img.youtube.com/vi/1Q5CXN7soQg/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2021,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=1Q5CXN7soQg",
        description: "This Netflix documentary exposes the environmental impact of commercial fishing. The trailer reveals shocking truths about overfishing, plastic pollution, and ocean destruction. It urges viewers to rethink seafood consumption and sustainability."
    },
    {
        title: "Amy",
        image: "https://img.youtube.com/vi/Za3lZcrzzcM/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=Za3lZcrzzcM",
        description: "A powerful look at the life and tragic death of singer Amy Winehouse. The trailer highlights her music, fame, and personal struggles. Combining archival footage and interviews, it paints a raw and emotional portrait of a fallen star."
    },
    {
        title: "The Game Changers",
        image: "https://img.youtube.com/vi/iSpglxHTJVM/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2018,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=iSpglxHTJVM",
        description: "Explores the rise of plant-based diets among athletes and its effects on health and performance. The trailer shows elite sports figures breaking stereotypes about protein. Produced by James Cameron, it inspires a rethink of nutrition and strength."
    },
    {
        title: "Wild Wild Country",
        image: "https://img.youtube.com/vi/hBLS_OM6Puk/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2018,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=hBLS_OM6Puk",
        description: "A six-part Netflix documentary about controversial Indian guru Bhagwan Rajneesh (Osho) and his commune in Oregon. The trailer teases shocking clashes, cult drama, and legal battles. It’s a gripping true-crime style exploration of faith and power."
    },
    {
        title: "Honeyland",
        image: "https://img.youtube.com/vi/B27ORUHlp6E/hqdefault.jpg",
        category: "documentary",
        language: "turkish",
        type: "movie",
        year: 2019,
        rating: 4.8,
        link: "https://www.youtube.com/watch?v=B27ORUHlp6E",
        description: "Shot in North Macedonia, this award-winning film follows a beekeeper living in harmony with nature. The trailer highlights stunning landscapes and ecological balance. A poetic story about sustainability, greed, and survival in a changing world."
    },
    {
        title: "Searching for Sugar Man",
        image: "https://img.youtube.com/vi/tDw7OqVBT-w/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2012,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=tDw7OqVBT-w",
        description: "Documents the search for forgotten American musician Rodriguez, who unknowingly became a legend in South Africa. The trailer showcases mystery, music, and rediscovery. Winner of the Academy Award for Best Documentary Feature in 2013."
    },
    {
        title: "Cowspiracy",
        image: "https://img.youtube.com/vi/nV04zyfLyN4/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2014,
        rating: 4.6,
        link: "https://www.youtube.com/watch?v=nV04zyfLyN4",
        description: "Investigates the environmental impact of animal agriculture and why major environmental groups avoid the issue. The trailer reveals bold truths about climate change. A controversial yet eye-opening film that sparked global debates on sustainability."
    },
    {
        title: "Crip Camp",
        image: "https://img.youtube.com/vi/OFS8SpwioZ4/hqdefault.jpg",
        category: "documentary",
        language: "english",
        type: "movie",
        year: 2020,
        rating: 4.5,
        link: "https://www.youtube.com/watch?v=OFS8SpwioZ4",
        description: "Produced by Barack and Michelle Obama, this documentary shows how a summer camp for disabled teens sparked a movement. The trailer highlights activism, courage, and joy. It’s an inspiring tale of resilience and civil rights in America."
    },
    {
        title: "Jiro Dreams of Sushi",
        image: "https://img.youtube.com/vi/M-aGPniFvS0/hqdefault.jpg",
        category: "documentary",
        language: "japanese",
        type: "movie",
        year: 2011,
        rating: 4.7,
        link: "https://www.youtube.com/watch?v=M-aGPniFvS0",
        description: "Follows 85-year-old Jiro Ono, a sushi master in Tokyo, and his pursuit of perfection. The trailer showcases craftsmanship, dedication, and artistry. It’s a mouthwatering portrait of tradition and discipline in Japanese culinary culture."
    },
    {
        title: "Frozen",
        image: "https://img.youtube.com/vi/TbQm5doF_Uc/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2013,
        rating: 4.6,
        link: "https://www.youtube.com/embed/TbQm5doF_Uc",
        description: "Disney’s 'Frozen' tells the magical story of sisters Elsa and Anna. The trailer shows Elsa’s struggle with her icy powers and Anna’s determination to save her. Packed with songs, adventure, and heartwarming moments, it became a global kids’ favorite."
    },
    {
        title: "Moana",
        image: "https://img.youtube.com/vi/LKFuXETZUsI/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.7,
        link: "https://www.youtube.com/embed/LKFuXETZUsI",
        description: "Set in Polynesia, 'Moana' follows a brave young girl chosen by the ocean to save her people. The trailer highlights her journey with demigod Maui, breathtaking visuals, and inspiring songs. It’s a tale of courage, self-discovery, and adventure."
    },
    {
        title: "Toy Story",
        image: "https://img.youtube.com/vi/v-PjgYDrg70/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 1995,
        rating: 4.8,
        link: "https://www.youtube.com/embed/v-PjgYDrg70",
        description: "Pixar’s 'Toy Story' introduces Woody, Buzz Lightyear, and friends in a world where toys come alive. The trailer showcases humor, adventure, and friendship. As the first-ever fully CGI feature, it’s a timeless kids’ classic with emotional depth."
    },
    {
        title: "Kung Fu Panda",
        image: "https://img.youtube.com/vi/PXi3Mv6KMzY/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2008,
        rating: 4.5,
        link: "https://www.youtube.com/embed/PXi3Mv6KMzY",
        description: "DreamWorks' 'Kung Fu Panda' follows Po, a clumsy panda who dreams of becoming a kung fu master. The trailer highlights comedy, martial arts action, and vibrant characters. It’s a fun-filled underdog story teaching perseverance and self-belief."
    },
    {
        title: "Finding Nemo",
        image: "https://img.youtube.com/vi/wZdpNglLbt8/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2003,
        rating: 4.7,
        link: "https://www.youtube.com/embed/wZdpNglLbt8",
        description: "A heartwarming Pixar tale about Marlin, a clownfish, searching for his lost son Nemo. The trailer showcases colorful ocean life, memorable characters like Dory, and emotional moments. It’s both an adventure and a story about family bonds."
    },
    {
        title: "Zootopia",
        image: "https://img.youtube.com/vi/jWM0ct-OLsM/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2016,
        rating: 4.6,
        link: "https://www.youtube.com/embed/jWM0ct-OLsM",
        description: "Disney’s 'Zootopia' takes kids into a world of anthropomorphic animals. The trailer highlights Judy Hopps, a rookie rabbit cop, teaming up with Nick, a sly fox. It’s fun, colorful, and delivers a powerful message about diversity and acceptance."
    },
    {
        title: "Despicable Me",
        image: "https://img.youtube.com/vi/sUkZFetWYY0/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2010,
        rating: 4.4,
        link: "https://www.youtube.com/embed/sUkZFetWYY0",
        description: "Gru, a supervillain with a big heart, adopts three little girls while planning his greatest heist. The trailer highlights the hilarious minions, family fun, and touching moments. It’s a blend of comedy and warmth perfect for kids."
    },
    {
        title: "The Lion King",
        image: "https://img.youtube.com/vi/lFzVJEksoDY/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 1994,
        rating: 4.9,
        link: "https://www.youtube.com/embed/lFzVJEksoDY",
        description: "Disney’s iconic 'The Lion King' follows Simba’s journey from cub to king. The trailer features unforgettable songs, stunning animation, and emotional storytelling. A timeless tale of responsibility, loss, and courage that kids cherish."
    },
    {
        title: "Inside Out",
        image: "https://img.youtube.com/vi/seMwpP0yeu4/hqdefault.jpg",
        category: "Kids",
        language: "english",
        type: "movie",
        year: 2015,
        rating: 4.8,
        link: "https://www.youtube.com/embed/seMwpP0yeu4",
        description: "Pixar’s 'Inside Out' takes kids inside the mind of Riley, where emotions Joy, Sadness, Anger, Fear, and Disgust guide her life. The trailer shows a colorful, imaginative world with deep emotional lessons about growing up and understanding feelings."
    },


]
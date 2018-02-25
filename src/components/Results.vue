<template>
  <section class="results">
    <h1>Search Results</h1>
      <p>{{msg}}</p>
  <!--    <h2>{{ item.current_city.name }}</h2> -->

      <ul class="multiple" v-for="item in items">
        <li><strong>{{ item.current_city.name }}</strong></li>
        <li>Number of interests listed: <strong>{{ item.current_city.total_points_of_interest }}</strong></li>
        <li>Data format is not efficient... array > (object(current_city), array(points_of_interest) > object > array(categories))</li>

      </ul>


  </section>

</template>

<script>

  export default {

    name: 'Results',
    data () {
      return {
        msg: 'To display data from the city searched.',
        items: [
            {
              "current_city": {
                    "name": "New York City",
                    "location": {
                        "latitude": 40.71427,
                        "longitude": -74.00597
                    },
                    "geoname_id": 5128581,
                    "total_points_of_interest": 1122,
                    "important_note": "This city is not yet supported with Yapq Api.                     Please check our supported city list here: http://yapq.io/cities.html or in json format: http://yapq.io/cities.txt"
                },
                "points_of_interest": [
                    {
                        "title": "Empire State Building",
                        "categories": [
                            "Latin rhythmic radio stations",
                            "Radio stations established in 1964",
                            "Radio stations in New York City",
                            "Spanish-language radio stations in New York",
                            "Univision Radio Network stations"
                        ],
                        "grades": {
                            "city_grade": 0,
                            "yapq_grade": 5
                        },
                        "geoname_id": 5116597,
                        "main_image": "https://upload.wikimedia.org/wikipedia/en/5/54/WXNY_X96.jpg",
                        "details": {
                            "description": "WXNY-FM is a radio station that broadcasts a Spanish language format. It is licensed to Univision Radio at 96.3 FM, and airs in the New York City metropolitan area. The station has a transmitter atop the Empire State Building.\n\n",
                            "wiki_page_link": "https://en.wikipedia.org/wiki/Empire State Building",
                            "short_description": "WXNY-FM is a radio station that broadcasts a Spanish language format."
                        },
                        "location": {
                            "longitude": -73.9857,
                            "latitude": 40.7484,
                            "google_maps_link": "http://maps.google.com?q=40.7484,-73.9857"
                        }
                    },
                    {
                        "title": "Madison Square Garden",
                        "categories": [
                            "1998 Goodwill Games venues",
                            "Arena football venues",
                            "Basketball venues in New York",
                            "Boxing venues in the United States",
                            "Cablevision",
                            "College basketball venues in the United States",
                            "Convention centers in New York",
                            "Eighth Avenue (Manhattan)",
                            "Former Viacom subsidiaries",
                            "Indoor ice hockey venues in New York",
                            "Indoor lacrosse venues in the United States",
                            "Indoor soccer venues in the United States",
                            "Indoor track and field venues in the United States",
                            "Landmarks in Manhattan",
                            "Madison Square Garden",
                            "Music venues in Manhattan",
                            "National Basketball Association venues",
                            "National Hockey League venues",
                            "New York Knicks venues",
                            "New York Liberty",
                            "New York Rangers arenas",
                            "Pennsylvania Plaza",
                            "Rebuilt buildings and structures in the United States",
                            "Round buildings",
                            "Sports venues completed in 1968",
                            "Sports venues in Manhattan",
                            "St. John's Red Storm basketball venues",
                            "World Hockey Association venues"
                        ],
                        "grades": {
                            "city_grade": 1,
                            "yapq_grade": 4
                        },
                        "geoname_id": 5125640,
                        "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Britney_Spears_MSG.jpg/400px-Britney_Spears_MSG.jpg",
                        "details": {
                            "description": "Madison Square Garden, sometimes called MSG or The Garden, is a multi-purpose indoor arena in the New York City borough of Manhattan in the U.S. state of New York. Located in Midtown Manhattan between Seventh and Eighth Avenues from 31st to 33rd Streets, it is situated atop Pennsylvania Station. It is the fourth venue to bear the \"MSG\" name, the first two  of which were located on Madison Square, on East 26th Street and Madison Avenue, with the third Madison Square Garden further uptown at Eighth Avenue and 50th Street. The Garden is used for professional basketball and ice hockey, as well as boxing, concerts, ice shows, circuses, and other forms of sports and entertainment. It is close to other midtown Manhattan landmarks, including the Empire State Building, Koreatown, and Macy's at Herald Square. It is home to the New York Rangers of the National Hockey League, the New York Knicks of the National Basketball Association, and residency to singer-songwriter, Billy Joel.\nOpening on February 11, 1968, it is the oldest and most active major sporting facility in the New York metropolitan area. It is the oldest arena in the National Hockey League and the second-oldest arena in the National Basketball Association. MSG is the fourth-busiest music arena in the world in terms of ticket sales, behind England's The O2 Arena, Manchester Arena and Scotland's The SSE Hydro. At a total construction cost of approximately $1.1 billion, MSG has been ranked as one of the ten most expensive stadium venues ever built. It is part of the Pennsylvania Plaza office and retail complex. Several other operating entities related to the Garden share its name.",
                            "wiki_page_link": "https://en.wikipedia.org/wiki/Madison Square Garden",
                            "short_description": "Madison Square Garden, sometimes called MSG or The Garden, is a multi-purpose indoor arena in the New York City borough of Manhattan in the U."
                        },
                        "location": {
                            "longitude": -73.9936,
                            "latitude": 40.7506,
                            "google_maps_link": "http://maps.google.com?q=40.7506,-73.9936"
                        }
                    },
                    {
                        "title": "Death of John Lennon",
                        "categories": [
                            "1980 in music",
                            "1980 in New York",
                            "1980 murders in the United States",
                            "20th century in New York City",
                            "Central Park West Historic District",
                            "Crimes in New York City",
                            "Deaths by firearm in New York",
                            "Deaths by person",
                            "John Lennon"
                        ],
                        "grades": {
                            "city_grade": 2,
                            "yapq_grade": 3
                        },
                        "geoname_id": 0,
                        "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/1_West_72nd_Street_%28The_Dakota%29_by_David_Shankbone.jpg/400px-1_West_72nd_Street_%28The_Dakota%29_by_David_Shankbone.jpg",
                        "details": {
                            "description": "John Lennon was an English musician who gained worldwide fame as one of the members of The Beatles, for his subsequent solo career, and for his political activism and pacifism. He was shot by Mark David Chapman in the archway of the building where he lived, The Dakota, in New York City on Monday, 8 December 1980. Lennon had just returned from Record Plant Studio with his wife, Yoko Ono.\nLennon was pronounced dead on arrival at Roosevelt Hospital. He was 40 years old. At the hospital, it was stated that nobody could have lived for more than a few minutes after sustaining such injuries. Shortly after local news stations reported Lennon's death, crowds gathered at Roosevelt Hospital and in front of the Dakota. Lennon was cremated on 10 December 1980 at the Ferncliff Cemetery in Hartsdale, New York; the ashes were given to Ono, who chose not to hold a funeral for him. The first media report of Lennon's death to a US national audience was announced by Howard Cosell, on ABC's Monday Night Football.",
                            "wiki_page_link": "https://en.wikipedia.org/wiki/Death of John Lennon",
                            "short_description": "John Lennon was an English musician who gained worldwide fame as one of the members of The Beatles, for his subsequent solo career, and for his political activism and pacifism."
                        },
                        "location": {
                            "longitude": -73.976,
                            "latitude": 40.7764,
                            "google_maps_link": "http://maps.google.com?q=40.7764,-73.976"
                        }
                    },
                    {
                        "title": "Trump Tower (New York City)",
                        "categories": [
                            "1980s architecture in the United States",
                            "1983 establishments in New York",
                            "Fifth Avenue",
                            "Midtown Manhattan",
                            "Office buildings completed in 1983",
                            "Office buildings in Manhattan",
                            "Residential buildings completed in 1983",
                            "Residential condominiums in New York City",
                            "Residential skyscrapers in Manhattan",
                            "Skyscrapers between 200 and 249 meters"
                        ],
                        "grades": {
                            "city_grade": 3,
                            "yapq_grade": 2
                        },
                        "geoname_id": 0,
                        "main_image": "http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Trump-Tower-2.jpg/250px-Trump-Tower-2.jpg",
                        "details": {
                            "description": "Trump Tower is a 68-story mixed-use skyscraper located at 725 Fifth Avenue, at the corner of East 56th Street in Midtown Manhattan, New York City. It was developed by Donald Trump and the Equitable Life Assurance Company, it is now just developed and owned by Donald Trump, and designed by Der Scutt of Swanke, Hayden Connell. The ground floor stores in the tower were opened for business on November 30, 1983. The grand opening of the Atrium and stores was held on February 14, 1983 with the apartments and offices following shortly thereafter. HRH Construction was the contractor on the building and the Construction Executive was Barbara Res.",
                            "wiki_page_link": "https://en.wikipedia.org/wiki/Trump Tower (New York City)",
                            "short_description": "Trump Tower is a 68-story mixed-use skyscraper located at 725 Fifth Avenue, at the corner of East 56th Street in Midtown Manhattan, New York City."
                        },
                        "location": {
                            "longitude": -73.9742,
                            "latitude": 40.7625,
                            "google_maps_link": "http://maps.google.com?q=40.7625,-73.9742"
                        }
                    },
                    {
                        "title": "One World Trade Center",
                        "categories": [],
                        "grades": {
                            "city_grade": 4,
                            "yapq_grade": 1
                        },
                        "geoname_id": 0,
                        "main_image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/OWTC1sep.jpg/220px-OWTC1sep.jpg",
                        "details": {
                            "description": "One World Trade Center  refers to the main building of the new World Trade Center complex in Lower Manhattan, New York City. It is the tallest skyscraper in the Western Hemisphere, and the fourth-tallest in the world. The 104-story supertall structure shares a numeric name with the northern Twin Tower of the original World Trade Center, which was destroyed in the terrorist attacks of September 11, 2001. The new skyscraper stands on the northwest corner of the 16-acre  World Trade Center site, on the site of the original 6 World Trade Center. The building is bordered by West Street to the west, Vesey Street to the north, Fulton Street to the south, and Washington Street to the east.\nConstruction of below-ground utility relocations, footings, and foundations for the new building began on April 27, 2006. On March 30, 2009, the Port Authority of New York and New Jersey confirmed that the building would be officially known by its legal name of \"One World Trade Center\", rather than its colloquial name of \"Freedom Tower\". The building is 104 standard floors high, but the tower has only 94 actual stories.\nOne World Trade Center became the tallest structure in New York City on April 30, 2012, when it surpassed the height of the Empire State Building. The tower's steel structure was topped out on August 30, 2012. On May 10, 2013, the final component of the skyscraper's spire was installed, making the building, including its spire, reach a total height of 1,776 feet . Its height in feet is a deliberate reference to the year when the United States Declaration of Independence was signed. The building opened on November 3, 2014. The new World Trade Center complex will initially include three other high-rise office buildings, which will be built along Greenwich Street, and the National September 11 Memorial & Museum, located just south of One World Trade Center, where the original Twin Towers stood. The construction of the new building is part of an effort to memorialize and rebuild following the destruction of the original World Trade Center complex.",
                            "wiki_page_link": "https://en.wikipedia.org/wiki/One World Trade Center",
                            "short_description": "One World Trade Center  refers to the main building of the new World Trade Center complex in Lower Manhattan, New York City."
                        },
                        "location": {
                            "longitude": -74.0135,
                            "latitude": 40.713,
                            "google_maps_link": "http://maps.google.com?q=40.713,-74.0135"
                        }
                    }
                ]
            }
            ,
            {
            "current_city": {
              "name": "Chicago",
              "location": {
                "latitude": 41.85003,
                "longitude": -87.65005
              },
              "geoname_id": 4887398,
              "total_points_of_interest": 788
            },
            "points_of_interest": [
              {
                "title": "Family Matters",
                "categories": [
                  "1980s American comedy television series",
                  "1980s American television series",
                  "1989 American television series debuts",
                  "1990s American comedy television series",
                  "1998 American television series endings",
                  "American Broadcasting Company network shows",
                  "American television sitcoms",
                  "Black sitcoms",
                  "CBS network shows",
                  "English-language television programming",
                  "Fictional portrayals of the Chicago Police Department",
                  "Television series about families",
                  "Television series by Warner Bros. Television",
                  "Television shows set in Chicago, Illinois",
                  "Television spin-offs",
                  "TGIF (ABC)"
                ],
                "grades": {
                  "city_grade": 0,
                  "yapq_grade": 5
                },
                "geoname_id": 0,
                "main_image": "https://upload.wikimedia.org/wikipedia/en/d/d6/Family_Matters.jpg",
                "details": {
                  "description": "Family Matters is an American sitcom which originated on ABC network from September 22, 1989 to May 9, 1997 and then aired on CBS network from September 19, 1997, to July 17, 1998. A spin-off of Perfect Strangers, the series revolves around the Winslow family, a middle-class African American family living in Chicago, Illinois. Midway through the first season, the show introduced the Winslows' nerdy neighbor Steve Urkel , who quickly became its breakout character and eventually the show's main character.\nHaving run for nine seasons, Family Matters is the second longest-running U.S. sitcom with a predominantly African American cast behind The Jeffersons, which aired for 11 seasons. In terms of the number of episodes, Family Matters is ranked third after Tyler Perry's House of Payne  and The Jeffersons , with 215.",
                  "wiki_page_link": "https://en.wikipedia.org/wiki/Family Matters",
                  "short_description": "Family Matters is an American sitcom which originated on ABC network from September 22, 1989 to May 9, 1997 and then aired on CBS network from September 19, 1997, to July 17, 1998."
                },
                "location": {
                  "longitude": -87.6668,
                  "latitude": 41.9289,
                  "google_maps_link": "http://maps.google.com?q=41.9289,-87.6668"
                }
              },
              {
                "title": "Rotary International",
                "categories": [],
                "grades": {
                  "city_grade": 1,
                  "yapq_grade": 4
                },
                "geoname_id": 0,
                "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Rotaryfeira.jpg/300px-Rotaryfeira.jpg",
                "details": {
                  "description": "Rotary International is an international service organization whose stated purpose is to bring together business and professional leaders in order to provide humanitarian services, encourage high ethical standards in all vocations, and help build goodwill and peace in the world. It is a secular organization open to all people regardless of race, color, creed, religion, gender, or political preference. There are 34,282 clubs and over 1.2 million members worldwide. The members of Rotary Clubs are known as Rotarians. Members usually meet weekly for breakfast, lunch, or dinner, which is a social event as well as an opportunity to organize work on their service goals.\nRotary's primary motto is \"Service Above Self\"; its secondary motto is, \"One profits most who serves best.\"",
                  "wiki_page_link": "https://en.wikipedia.org/wiki/Rotary International",
                  "short_description": "Rotary International is an international service organization whose stated purpose is to bring together business and professional leaders in order to provide humanitarian services, encourage high ethical standards in all vocations, and help build goodwill and peace in the world."
                },
                "location": {
                  "longitude": -87.6824,
                  "latitude": 42.0458,
                  "google_maps_link": "http://maps.google.com?q=42.0458,-87.6824"
                }
              },
              {
                "title": "Chicago",
                "categories": [
                  "1833 establishments in Illinois",
                  "Chicago, Illinois",
                  "Cities in Cook County, Illinois",
                  "Cities in DuPage County, Illinois",
                  "Cities in Illinois",
                  "Cities in the Chicago metropolitan area",
                  "Communities on U.S. Route 66",
                  "County seats in Illinois",
                  "Inland port cities and towns of the United States",
                  "Populated places established in 1833",
                  "Populated places on the Great Lakes"
                ],
                "grades": {
                  "city_grade": 2,
                  "yapq_grade": 1
                },
                "geoname_id": 4892535,
                "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Chicago_montage1.jpg/292px-Chicago_montage1.jpg",
                "details": {
                  "description": "Chicago  is the most populous non-coastal city in the United States of America. Its population also is larger than all U.S. coastal cities, except for New York City and Los Angeles. With 2.7 million residents, it is the most populous city in both the U.S. state of Illinois and the Midwestern United States. Its metropolitan area, sometimes called Chicagoland, is home to 9.9 million people and is the third-largest in the United States. Chicago is the seat of Cook County.\nChicago was incorporated as a city in 1837, near a portage between the Great Lakes and the Mississippi River watershed, and experienced rapid growth in the mid-nineteenth century. Today, the city is an international hub for finance, commerce, industry, technology, telecommunications, and transportation, with O'Hare International Airport being the busiest airport in the world; it also has the largest number of U.S. highways and railroad freight entering its region. In 2012, Chicago was listed as an alpha global city by the Globalization and World Cities Research Network, and ranks seventh in the world in the 2014 Global Cities Index. As of 2012, Chicago had the third largest gross metropolitan product in the United States, after the New York City and Los Angeles metropolitan areas, at a sum of US$571 billion.\nIn 2012, Chicago hosted 46.37 million international and domestic visitors, an overall visitation record. Chicago's culture includes contributions to the visual arts, novels, film, theater, especially improvisational comedy, and music, particularly jazz, blues, soul, and the creation of house music. The city has many nicknames, which reflect the impressions and opinions about historical and contemporary Chicago. The best-known include the \"Windy City\" and \"Second City\". Chicago has professional sports teams in each of the major professional leagues.",
                  "wiki_page_link": "https://en.wikipedia.org/wiki/Chicago",
                  "short_description": "Chicago  is the most populous non-coastal city in the United States of America."
                },
                "location": {
                  "longitude": -87.6278,
                  "latitude": 41.8819,
                  "google_maps_link": "http://maps.google.com?q=41.8819,-87.6278"
                }
              },
              {
                "title": "Willis Tower",
                "categories": [
                  "1973 establishments in Illinois",
                  "Airline company headquarters in the United States",
                  "Buildings and structures on U.S. Route 66",
                  "Central Chicago",
                  "Former world's tallest buildings",
                  "Landmarks in Chicago, Illinois",
                  "Office buildings completed in 1973",
                  "Office buildings in Chicago, Illinois",
                  "Retail company headquarters in the United States",
                  "Skidmore, Owings & Merrill buildings",
                  "Skyscrapers in Chicago, Illinois",
                  "Skyscrapers over 350 meters",
                  "United Airlines",
                  "Visitor attractions along U.S. Route 66",
                  "Visitor attractions in Chicago, Illinois"
                ],
                "grades": {
                  "city_grade": 3,
                  "yapq_grade": 1
                },
                "geoname_id": 4910967,
                "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Willis_Tower_night_2.jpg/317px-Willis_Tower_night_2.jpg",
                "details": {
                  "description": "The Willis Tower, built as and still commonly referred to as Sears Tower, is a 108-story, 1,451-foot  skyscraper in Chicago, Illinois, United States. At completion in 1973, it surpassed the World Trade Center towers in New York to become the tallest building in the world, a title it held for nearly 25 years. The Willis Tower is the second-tallest building in the United States and the 12th-tallest in the world. More than one million people visit its observation deck each year, making it one of Chicago's most popular tourist destinations. The structure was renamed in 2009 by the Willis Group as part of its lease on a portion of the tower's space.\nAs of December 2013, the building's largest tenant is United Airlines, which moved its corporate headquarters from the United Building at 77 West Wacker Drive in 2012 and today occupies around 20 floors with its headquarters and operations center.\nThe building's official address is 233 South Wacker Drive, Chicago, Illinois 60606.",
                  "wiki_page_link": "https://en.wikipedia.org/wiki/Willis Tower",
                  "short_description": "The Willis Tower, built as and still commonly referred to as Sears Tower, is a 108-story, 1,451-foot  skyscraper in Chicago, Illinois, United States."
                },
                "location": {
                  "longitude": -87.6358,
                  "latitude": 41.8789,
                  "google_maps_link": "http://maps.google.com?q=41.8789,-87.6358"
                }
              }
            ]
            }
            ,

            {
            "current_city": {
              "name": "Los Angeles",
              "location": {
                "latitude": 34.05223,
                "longitude": -118.24368
              },
              "geoname_id": 5368361,
              "total_points_of_interest": 5628
              },
            "points_of_interest": [{
                "title": "Ronald Reagan",
                "categories": [],
                "grades": {
                  "city_grade": 0,
                  "yapq_grade": 5
                },
                "geoname_id": 0,
                "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/320px-Official_Portrait_of_President_Reagan_1981.jpg",
                "details": {
                  "description": "Ronald Wilson Reagan  was an American politician and conservative spokesman who served as the 40th President of the United States from 1981 to 1989. Prior to his presidency, he served as the 33rd Governor of California from 1967 to 1975, following a career as an actor and union leader in Hollywood.\nRaised in a poor family in small towns in Northern Illinois, he graduated from Eureka College in 1932 and worked as a sports announcer on regional radio stations. Moving to Hollywood in 1937, he became a \"B-move\" film actor, starring in a few major productions. Reagan was twice elected twice as President of the Screen Actors Guild, where he tried to root out Communist influence. In the 1950s he was a spokesman for General Electric. Originally a liberal Democrat, he became conservative Republican in 1962.. In 1964, Reagan's speech, \"A Time for Choosing\", in support of Barry Goldwater's presidential campaign, earned him national attention. Building a network of supporters, he was elected governor of California in 1966. As governor, Reagan turned a state budget deficit to a surplus, ordered National Guard troops in during a period of protest movements in 1969, and was re-elected in 1970. He twice ran unsuccessfully for the Republican nominations in 1968 and 1976; four years later, he would win the nomination outright, going on to be elected the oldest President, defeating incumbent Jimmy Carter in 1980.\nEntering the Presidency in 1981, Reagan implemented sweeping new political and economic initiatives. His supply-side economic policies, dubbed \"Reaganomics\", advocated tax rate reduction to spur economic growth, control of the money supply to curb inflation, economic deregulation, and reduced government spending. In his first term he survived an assassination attempt, escalated the War on Drugs, and fought public-sector labor. His economic policies saw a reduction of inflation from 12.5% to 4.4%, and an average annual growth of GDP of 7.91%; while Reagan did enact cuts in domestic spending, military spending increased federal outlays overall, even after adjustment for inflation. During his reelection bid, Reagan campaigned on the notion that it was \"Morning in America\", winning a landslide in 1984 with the largest electoral college victory in history. Foreign affairs dominated his second term, including ending of the Cold War, the bombing of Libya, and the revelation of the Iran–Contra affair. Publicly describing the Soviet Union as an \"evil empire\", he transitioned Cold War policy from détente to rollback, by escalating an arms race with the USSR while engaging in talks with Soviet General Secretary Mikhail Gorbachev, which culminated in the INF Treaty, shrinking both countries' nuclear arsenals. During his famous speech at the Brandenburg Gate, President Reagan challenged Soviet leader Mikhail Gorbachev to \"tear down this wall!\" Shortly after the end of his term, the Berlin Wall fell and the Soviet Union collapsed soon thereafter.\nLeaving office in 1989, Reagan held an approval rating of sixty-eight percent, matching those of Franklin D. Roosevelt, and later Bill Clinton, as the highest ratings for departing presidents in the modern era. While having planned an active post-presidency, in 1994 Reagan disclosed his diagnosis with Alzheimer's disease earlier that year, appearing publicly for the last time at the funeral of Richard Nixon; he died ten years later at the age of 93. An icon among Republicans, he ranks highly in public and critical opinion of U.S. Presidents, and his tenure constituted a realignment toward conservative policies in the United States.",
                  "wiki_page_link": "https://en.wikipedia.org/wiki/Ronald Reagan",
                  "short_description": "Ronald Wilson Reagan  was an American politician and conservative spokesman who served as the 40th President of the United States from 1981 to 1989."
                },
                "location": {
                  "longitude": -118.82,
                  "latitude": 34.2599,
                  "google_maps_link": "http://maps.google.com?q=34.2599,-118.82"
                }
              },
              {
                "title": "Pixar",
                "categories": [],
                "grades": {
                  "city_grade": 1,
                  "yapq_grade": 4
                },
                "geoname_id": 0,
                "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pixaranimationstudios.jpg/400px-Pixaranimationstudios.jpg",
                "details": {
                  "description": "Pixar Animation Studios, or simply Pixar , is an American computer animation film studio based in Emeryville, California. The studio is best known for its CGI-animated feature films created with PhotoRealistic RenderMan, its own implementation of the industry-standard RenderMan image-rendering application programming interface used to generate high-quality images. Pixar began in 1979 as the Graphics Group, part of the computer division of Lucasfilm before its spin-out as a corporation in 1986 with funding by Apple Inc. cofounder Steve Jobs, who became its majority shareholder. The Walt Disney Company bought Pixar in 2006 at a valuation of $7.4 billion, a transaction that resulted in Jobs becoming Disney's largest single shareholder at the time.\nLuxo Jr., a character from a 1986 Pixar short film of the same name, is the mascot of the studio.\nPixar has produced 14 feature films, beginning with Toy Story in 1995. Most of the films have received both critical and financial success, with a notable exception being Cars 2 , which, while commercially successful, received substantially less praise than Pixar's other productions. All 14 films have debuted with CinemaScore ratings of at least \"A−\", indicating a positive reception with audiences. The studio has also produced several short films. As of December 2013, its feature films have made over $8.6 billion worldwide, with an average worldwide gross of $616 million per film. Both Finding Nemo  and Toy Story 3  are among the 50 highest-grossing films of all time, and 13 of Pixar's films are among the 50 highest-grossing animated films. The latter is the second all-time highest, behind Walt Disney Animation Studios' Frozen, which grossed $1.27 billion in its initial release in comparison to Toy Story 3‍ '​s $1.064 billion.\nThe studio has earned 15 Academy Awards, seven Golden Globe Awards, and 11 Grammy Awards, among many other awards and acknowledgments. Since the award's inauguration in 2001, most of Pixar's films have been nominated for the Academy Award for Best Animated Feature. Seven have won, including Finding Nemo and Toy Story 3, as well as The Incredibles , Ratatouille , WALL-E , Up , and Brave . Monsters, Inc.  and Cars  are the only films that were nominated for the award, but did not win it. Up and Toy Story 3 were also the second and third animated films to be nominated for the Academy Award for Best Picture . On September 6, 2009, executives John Lasseter, Brad Bird, Pete Docter, Andrew Stanton, and Lee Unkrich were presented with the Golden Lion for Lifetime Achievement by the biennial Venice Film Festival. The award was presented by Lucasfilm founder George Lucas.",
                  "wiki_page_link": "https://en.wikipedia.org/wiki/Pixar",
                  "short_description": "Pixar Animation Studios, or simply Pixar , is an American computer animation film studio based in Emeryville, California."
                },
                "location": {
                  "longitude": -122.284,
                  "latitude": 37.8326,
                  "google_maps_link": "http://maps.google.com?q=37.8326,-122.284"
                }
              },
              {
                "title": "Apple Inc.",
                "categories": [],
                "grades": {
                  "city_grade": 2,
                  "yapq_grade": 2
                },
                "geoname_id": 0,
                "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Headquarters_in_Cupertino.jpg/400px-Apple_Headquarters_in_Cupertino.jpg",
                "details": {
                  "description": "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apple's consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.\nApple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne on April 1, 1976, to develop and sell personal computers. It was incorporated as Apple Computer, Inc. on January 3, 1977, and was renamed as Apple Inc. on January 9, 2007, to reflect its shifted focus towards consumer electronics. Apple  joined the Dow Jones Industrial Average on March 19, 2015.\nApple is the world's second-largest information technology company by revenue after Samsung Electronics, world's largest technology company by Total Assets and the world's third-largest mobile phone maker. On November 25, 2014, in addition to being the largest publicly traded corporation in the world by market capitalization, Apple became the first U.S. company to be valued at over $700 billion. As of 2014, Apple employs 72,800 permanent full-time employees, maintains 437 retail stores in fifteen countries, and operates the online Apple Store and iTunes Store, the latter of which is the world's largest music retailer.\nApple's worldwide annual revenue in 2014 totaled US$182 billion . Apple enjoys a high level of brand loyalty and, according to the 2014 edition of the Interbrand Best Global Brands report, is the world's most valuable brand with a valuation of $118.9 billion. By the end of 2014, the corporation continued to manage significant criticism regarding the labor practices of its contractors, as well as for its environmental and business practices, including the origins of source materials.\n^ \"Press Info – Apple Leadership\". Apple. Retrieved February 22, 2012. \n^ a b c d e \"Apple FY14 Results\" . United States Securities and Exchange Commission. October 20, 2014. \n^ \"Apple - Diversity - Inclusion inspires innovation.\". Apple.com. Retrieved August 12, 2014. \n^ \"Apple Computers: This Month in Business History \". loc.gov. \n^ \"Apple Inc. finally joins ranks of the Dow's elite 30 stocks\". Los Angeles Times. June 3, 2015. Retrieved March 10, 2015. \n^ \"Apple Inc market cap tops US$700B, double what it was when Tim Cook took over as CEO\". Financial Post. November 25, 2014. Retrieved November 25, 2014. \n^ \"Number of Apple stores worldwide 2005-2014\". Statista. Retrieved December 6, 2014. \n^ \"Annual Financials for Apple Inc.\". MarketWatch. Retrieved November 13, 2014. \n^ Elliott, Stuart. \"Technology Titans Lead Ranking of Most Valuable Brands\". The New York Times. Retrieved October 10, 2014.",
                  "wiki_page_link": "https://en.wikipedia.org/wiki/Apple Inc.",
                  "short_description": "Apple Inc."
                },
                "location": {
                  "longitude": -122.031,
                  "latitude": 37.3318,
                  "google_maps_link": "http://maps.google.com?q=37.3318,-122.031"
                }
              }
            ]
            }
            ,

            {
              "current_city": {
                "name": "Boston",
                "location": {
                  "latitude": 42.35843,
                  "longitude": -71.05977
                },
                "geoname_id": 4930956,
                "total_points_of_interest": 3674,
                "important_note": "This city is not yet supported with Yapq Api. Please check our supported city list here: http://yapq.io/cities.html or in json format: http://yapq.io/cities.txt"
              },
              "points_of_interest": [
                {
                  "title": "Boston Tea Party",
                  "categories": [
                    "1773 in Massachusetts",
                    "1773 in the Thirteen Colonies",
                    "1773 riots",
                    "Battles and conflicts without fatalities",
                    "Boston Harbor",
                    "British East India Company",
                    "History of Boston, Massachusetts",
                    "History of tea",
                    "History of the Thirteen Colonies",
                    "Massachusetts in the American Revolution",
                    "Political repression in the United States",
                    "Rebellions in the United States",
                    "Tax resistance in the United States"
                  ],
                  "grades": {
                    "city_grade": 0,
                    "yapq_grade": 5
                  },
                  "geoname_id": 4931015,
                  "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Boston_Tea_Party_w.jpg/400px-Boston_Tea_Party_w.jpg",
                  "details": {
                    "description": "The Boston Tea Party  was a political protest by the Sons of Liberty in Boston, on December 16, 1773. The demonstrators, some disguised as American Indians, destroyed an entire shipment of tea sent by the East India Company, in defiance of the Tea Act of May 10, 1773. They boarded the ships and threw the chests of tea into Boston Harbor, ruining the tea. The British government responded harshly and the episode escalated into the American Revolution. The Tea Party became an iconic event of American history, and other political protests such as the Tea Party movement after 2010 explicitly refer to it.\nThe Tea Party was the culmination of a resistance movement throughout British America against the Tea Act, which had been passed by the British Parliament in 1773. Colonists objected to the Tea Act because they believed that it violated their rights as Englishmen to \"No taxation without representation,\" that is, be taxed only by their own elected representatives and not by a British parliament in which they were not represented. Protesters had successfully prevented the unloading of taxed tea in three other colonies, but in Boston, embattled Royal Governor Thomas Hutchinson refused to allow the tea to be returned to Britain.\nThe Boston Tea Party was a key event in the growth of the American Revolution. Parliament responded in 1774 with the Coercive Acts, or Intolerable Acts, which, among other provisions, ended local self-government in Massachusetts and closed Boston's commerce. Colonists up and down the Thirteen Colonies in turn responded to the Coercive Acts with additional acts of protest, and by convening the First Continental Congress, which petitioned the British monarch for repeal of the acts and coordinated colonial resistance to them. The crisis escalated, and the American Revolutionary War began near Boston in 1775.\n^ Young, Shoemaker, 183–85.\n^ John Adams: Revolutionary Writings 1755–1775 . This Destruction of the Tea is so bold, so daring, so firm, intrepid and inflexible, and it must have so important Consequences, and so lasting, that I cant but consider it as an Epocha in History.",
                    "wiki_page_link": "https://en.wikipedia.org/wiki/Boston Tea Party",
                    "short_description": "The Boston Tea Party  was a political protest by the Sons of Liberty in Boston, on December 16, 1773."
                  },
                  "location": {
                    "longitude": -71.0524,
                    "latitude": 42.3536,
                    "google_maps_link": "http://maps.google.com?q=42.3536,-71.0524"
                  }
                },
                {
                  "title": "Lizzie Borden",
                  "categories": [],
                  "grades": {
                    "city_grade": 1,
                    "yapq_grade": 4
                  },
                  "geoname_id": 0,
                  "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lizzie_borden.jpg/260px-Lizzie_borden.jpg",
                  "details": {
                    "description": "Lizzie Andrew Borden  was an American woman who was tried and acquitted for the 1892 axe murders of her father and her stepmother in Fall River, Massachusetts. The case was a cause célèbre throughout the United States. Following her release from the prison in which she had been held during the trial, Borden chose to remain a resident of Fall River, Massachusetts, for the rest of her life, despite facing significant ostracism. The Commonwealth of Massachusetts elected to charge no one else with the murder of Andrew and Abby Borden; speculation about the crimes still continues more than 100 years later.",
                    "wiki_page_link": "https://en.wikipedia.org/wiki/Lizzie Borden",
                    "short_description": "Lizzie Andrew Borden  was an American woman who was tried and acquitted for the 1892 axe murders of her father and her stepmother in Fall River, Massachusetts."
                  },
                  "location": {
                    "longitude": -71.1562,
                    "latitude": 41.699,
                    "google_maps_link": "http://maps.google.com?q=41.699,-71.1562"
                  }
                },
                {
                  "title": "Doug Flutie",
                  "categories": [],
                  "grades": {
                    "city_grade": 2,
                    "yapq_grade": 2
                  },
                  "geoname_id": 0,
                  "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Dougflutie.JPG/400px-Dougflutie.JPG",
                  "details": {
                    "description": "Douglas Richard Flutie  is a former player of American and Canadian football who was a quarterback in the National Football League , Canadian Football League , and United States Football League . He first rose to prominence during his college football career at Boston College, where he received the Heisman Trophy and the Davey O'Brien National Quarterback Award in 1984. His \"Hail Mary\" touchdown pass in a game against Miami on November 23, 1984  is considered among the greatest moments in college football and American sports history. Flutie was selected as the 285th pick in the 11th round of the 1985 NFL Draft by the Los Angeles Rams, making him the lowest drafted Heisman Award winner among those who were drafted. Flutie played that year for the New Jersey Generals of the upstart USFL. In 1986 he signed with the NFL's Chicago Bears, and later played for the New England Patriots, becoming their starting quarterback in 1988.\nFlutie signed with the BC Lions of the CFL in 1990, and in 1991, threw for a record 6,619 yards. He played briefly with his brother Darren, a wide receiver, before being traded to the Calgary Stampeders, whom he led to victory in the 1992 Grey Cup. In 1994, he threw a record 48 touchdown passes. Flutie played for the Stampeders until 1996, when he signed with the Toronto Argonauts, leading them to back-to-back Grey Cup victories in 1996 and 1997. Flutie was named the CFL's Most Outstanding Player a record six times, and was named the MVP in all three of his Grey Cup victories.\nHe returned to the NFL in 1998 with the Buffalo Bills, where he earned Pro Bowl and NFL Comeback Player of the Year honors. He played for the San Diego Chargers from 2001 to 2004, and finished his career as a member of the New England Patriots in 2005. In 2006, he was ranked #1 in a list of the top 50 CFL players. He was named to the College Football Hall of Fame and Canada's Sports Hall of Fame in 2007.\nAfter retiring in 2006, Flutie served as a college football analyst for ESPN and ABC. In 2009, he joined Versus as a broadcaster for United Football League games. Since 2011, he has worked for NBC Sports and NBCSN.",
                    "wiki_page_link": "https://en.wikipedia.org/wiki/Doug Flutie",
                    "short_description": "Douglas Richard Flutie  is a former player of American and Canadian football who was a quarterback in the National Football League , Canadian Football League , and United States Football League ."
                  },
                  "location": {
                    "longitude": -71.39,
                    "latitude": 42.302,
                    "google_maps_link": "http://maps.google.com?q=42.302,-71.39"
                  }
                }
              ]
            }

          ],

        method: {
              getPOI: () => {
                console.log("Coming through...")

              }

        },


      }

    }
  }

</script>

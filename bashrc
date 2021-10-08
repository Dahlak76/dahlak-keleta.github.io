<!DOCTYPE HTML>
<html>
    <head>
      <title>"Dahlak's Amazing Website</title>
    </head>
        <style>
    body {
        background: rgb(125, 198, 205);
        color: rgb(45, 45, 45);
        padding: 10px;
        font-family: arial;
    }
    #all-contents {
        max-width: 800px;
        margin: auto;
    }

    /* navigation menu */
    nav {
        background: rgb(239, 80, 41);
        margin: 0 auto;
        margin-bottom: 20px;
        display: flex;
        padding: 10px;
    }
    nav h1 {
        display: flex;
        align-items: center;
        color: white;
        flex: 1;
        margin: 0;
    }
    nav ul {
        list-style-image: none;
    }
    nav li {
        display: inline-block;
        padding: 0 10px;
    }
    nav a {
        text-decoration: none;
        color: #fff;
    }

    /* main container area beneath menu */
    main {
        background: rgb(245, 238, 219);
        display: flex;
    }
    .sidebar {
        margin-right: 25px;
        padding: 10px;
    }
    .sidebar img {
        width: 200px;
    }
    .content {
        flex: 1;
        padding: 15px;
    }
    h2, h3 {
        margin: 0px;
    }
</style>
    <body>
      <div id="all-contents"> 
            <nav>
                <h1>Dahlak's Amazing Website</h1>
                <ul>
                    <li>
                        <a href="index.html"> Home </a>
                    </li>
                    <li>
                        <a href="portfolio.html"> Portfolio </a>
                    </li>
                </ul>
            </nav>

            <main>
                    <div class="sidebar">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrnKHo43TMBJo6L-eaFG3AVLVj0OWcBh7Mw&usqp=CAU">
                    </div>

                    <div class="content">
                        <h2>

                        </h2>

                        <p>
                        "Student at Op Spark"
                            <div id="interests">
                                <h3>Interests</h3>
                                <ul>
                                    <li>Art</li>
                                    <li>Woodworking</li>
                                    <li>Dancing</li>
                                </ul>
                            </div>
                        </p>
                    </div>
            </main>
            </div>
    </body>
</html>
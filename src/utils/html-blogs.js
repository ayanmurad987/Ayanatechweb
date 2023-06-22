const blog2 = `
<p>Welcome to the world of HTML! HTML, short for HyperText Markup Language, is the backbone of the web. It's a simple and powerful language that allows us to create web pages and structure the content within them. In this blog post, we'll take a beginner-friendly journey into the world of HTML and explore its basic concepts.</p><p> </p><h2>What is HTML?</h2><p><br></p><p>HTML is a markup language used to structure the content of a web page. It uses tags, enclosed in angle brackets, to define the elements on a page. These elements can include headings, paragraphs, images, links, lists, and much more. HTML provides the building blocks for creating the structure and layout of a web page.</p><p><br></p><p><br></p><h2>Getting Started</h2><p><br></p><p>To start creating HTML documents, all you need is a simple text editor like Notepad (Windows) or TextEdit (Mac). Save your file with an .html extension, such as "index.html". Open the file in a web browser, and voila! You can see your web page come to life.</p><p><br></p><p><span class="ql-font-monospace"> </span></p><h2><strong>Basic Structure</strong></h2><p><br></p><p>Every HTML document follows a basic structure. It begins with the <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;!DOCTYPE html&gt;</code>declaration, which tells the browser that the document is written in HTML5, the latest version of HTML. The document is then wrapped in an opening <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;html&gt;</code>tag and closed with a <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;/html&gt;</code>tag. The content of the page is placed between the opening <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;body&gt;</code>and closing <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;/body&gt;</code>tags.</p><p><br></p><p><br></p><h2>Tags and Elements</h2><p><br></p><p>HTML elements are represented by tags. Tags are like containers that hold the content. They are written as opening and closing pairs. The opening tag denotes the start of an element, and the closing tag denotes the end. Some elements, like line breaks or images, don't require closing tags.</p><p><br></p><p><br></p><h2>Headings and Paragraphs</h2><p><br></p><p>Headings are used to define the titles and subtitles of a page. HTML provides six levels of headings, ranging from <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;h1&gt;</code>(the largest) to <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;h6&gt;</code>(the smallest). Paragraphs, denoted by the <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;p&gt;</code>tag, are used to group text and create blocks of content.</p><p><br></p><p><br></p><h2>Links and Images</h2><p><br></p><p>HTML allows you to create hyperlinks to other pages or resources using the <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;a&gt;</code>tag. You can specify the URL within the <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">href</code>attribute. To display images, use the <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;img&gt;</code>tag and provide the image source using the <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">src</code>attribute.</p><p><br></p><p><br></p><h2>Lists</h2><p><br></p><p>HTML offers two types of lists: ordered lists ( <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;ol&gt;</code>) and unordered lists ( <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;ul&gt;</code>). Ordered lists display items in a numbered sequence, while unordered lists use bullet points. List items are defined with the <code style="color: var(--tw-prose-code); background-color: rgb(0, 0, 0);">&lt;li&gt;</code>tag, placed within the list tags.</p>
`;
const blog1 = `<p>Introduction to HTML: Getting Started with Visual Studio Code</p>
<p>
    <br>
</p>
<p>Welcome to the world of HTML! In this blog post, we'll guide you through the process of setting up Visual Studio Code (VS Code) and creating your first HTML files. Let's get started!</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>Step 1: Install Visual Studio Code</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <em>Visual Studio Code is a popular and powerful code editor that provides great support for web development. You can download it for free from the official website at
        <u>[code.visualstudio.com](</u>
    </em>
    <a href="https://code.visualstudio.com/" target="_blank">
        <em>
            <u>https://code.visualstudio.com/</u>
        </em>
    </a>
    <em>
        <u>).</u>Choose the appropriate version for your operating system and follow the installation instructions.</em>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 18px;">Step 2: Launch Visual Studio Code</span>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <em>Once installed, launch VS Code. You'll see a clean and minimalist interface with various menus and panels.</em>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 18px;">Step 3: Create a New HTML File</span>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <em>To create a new HTML file, click on the "</em>
    <em style="background-color: rgb(0, 0, 0);">Explorer</em>
    <em>" icon in the left sidebar (or use the shortcut</em>
    <em style="background-color: rgb(0, 0, 0);">Ctrl+Shift+E</em>
    <em>on Windows/Linux or</em>
    <em style="background-color: rgb(0, 0, 0);">Cmd+Shift+E on Mac)</em>
    <em>. Right-click on an empty area in the explorer panel and select</em>
    <em style="background-color: rgb(0, 0, 0);">"New File."</em>
    <em>Alternatively, you can use the</em>
    <em style="background-color: rgb(0, 0, 0);">Ctrl+N</em>
    <em>(Windows/Linux) or</em>
    <em style="background-color: rgb(0, 0, 0);">Cmd+N</em>
    <em>(Mac) keyboard shortcut.</em>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 18px;">Step 4: Set Up the HTML Structure</span>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <em>In the new file, type the following code to set up the basic HTML structure:</em>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<pre spellcheck="false">&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &nbsp; &lt;title&gt;My First HTML Page&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &nbsp; &lt;h1&gt;Welcome to My First HTML Page!&lt;/h1&gt; &lt;/body&gt; &lt;/html&gt;
</pre>
<p>
    <br>
</p>
<p>
    <br>
</p>
<blockquote>This code defines the start and end of the HTML document, includes the '&lt;head&gt;' and '&lt;body&gt;' sections, and adds a heading element
    <span style="background-color: rgb(0, 0, 0);">'&lt;h1&gt;'</span>within the body.</blockquote>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 18px;">Step 5: Save and Preview the HTML File</span>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>Save the file by clicking on "File" in the top menu and selecting "Save" (or use the 'Ctrl+S' or 'Cmd+S' shortcut). Choose a file name and save it with the '.html' extension, for example, "index.html".</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>To preview your HTML file in the browser, right-click on the file in the explorer panel and select "Open with Live Server" (assuming you have the Live Server extension installed) or simply open it in your preferred browser by double-clicking on the file.</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <span style="font-size: 18px;">Step 6: Customize Your HTML Page</span>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>Now that you have a basic HTML structure, you can start customizing your page by adding various HTML elements such as headings, paragraphs, images, links, and more. Explore the different HTML tags and their attributes to create your desired content.</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <span style="background-color: rgb(0, 0, 0);">Conclusion</span>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<blockquote>Congratulations!You have successfully set up Visual Studio Code and created your first HTML file. You can continue exploring HTML and enhancing your web pages with CSS and JavaScript to create interactive and engaging websites.</blockquote>
<ul>
    <li>
        <br>
    </li>
</ul>`;
export { blog1, blog2 };

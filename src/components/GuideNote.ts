import Component from "../domain/component";

export default class GuideNote extends Component {
    constructor() {
        super();

    }

    propsHandler(props: string) {
        const title = this.getAttribute('title') as string;
        if(title === "welcome") {
            this.innerHTML = `
<h1>Welcome!</h1>
<pre><code>/* What is it? and how can i use it?

It's just whiteboard you can write & share code snippet notes!

1. Just write notes about example code you might forget easily.
After that, you can see your notes in "MyBoard" flag at the right side -->
( If you can't see "MyBoard" at the right, plz sign in first :D )

2. You can also add notes to your board by scrapping someone else's notes.
Just search notes and click "Scrap" button!

3. When your board is filled with tons of notes and you want to organize it,
Just use #hashtag feature!
Notes of same #hashtag are collected in new board,
And you can see this board in "#hashtagName" flag at the right side -->

That's it! write notes, take someone else's notes, organize them.
This would be GREAT help when you forget something.
GOOD LUCK!
*/</code></pre>
<span>@Guides</span>`;
        } else if(title === "write-note") {
            this.innerHTML = `
<h1>How To Write Note?</h1>
<pre><code>/* RULES to write notes

Plz follow these rules!
Write ONLY codes & comments so you can directly copy & paste this snippet to your editor.
And tag @language of this snippet's programming language at the bottom.
If you copy code from other website like stackoverflow, plz add link at the bottom too.
*/

package main

import "fmt"

func main() {
    fmt.Println("G'day mate!")
}</code></pre>
<span>@Go @Golang @go @golang</span>`;
        }
    }
}
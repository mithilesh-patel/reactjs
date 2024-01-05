
Element	Markdown Syntax
Heading	# H1
## H2
### H3
Bold	**bold text**
Italic	*italicized text*
Blockquote	
> blockquote This is a blockquote

Ordered List	
1. First item
2. Second item
3. Third item
Unordered List	- First item
- Second item
- Third item
Code	`code`
Horizontal rule 
---
Link	[title](https://www.example.com)
Image	![alt text](./assests/react.png)


Table	
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

Fenced Code Block	

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```


Definition List	term
: definition
Strikethrough	~~The world is flat.~~
Task List	
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---
Emoji (see also Copying and Pasting Emoji)	That is so funny! :joy:

Highlight

I need to highlight these ==very important words==.

Subscript	H~2~O

Superscript	X^2^

---

## Date 07-Dec-2023

- Production build is fast, otimized and performant.

- The things that we can automatically generate must not be pushed onto github

- Browserlist - used for making our app compatible in different types of browsers

NOTE: React do not minify the code rather its Bundlers and that too with the help of lot of other packages and dependencies.


## Date 04 Jan

-Setting up the project structure
-utils folder - get details about it
-Types of Export/ Import- Named and Default

#### Q. Can we use both Named and Default exports and imports at the same time?
Ans- Using both named exports and a default export in the same module provides flexibility and convenience when importing the module in other parts of your application.

Here are some benefits:

1. Clarity and readability: Named exports allow you to be explicit about which functions, variables, or classes you want to export from a module. This can make it easier for other developers (or even yourself in the future) to understand what is being exported from the module.

2. Default export for main functionality: The default export is useful when you want to export the main functionality of a module. When someone imports your module, they can choose to import the default export directly without needing to know the specific names of all the other exports.

3. Named exports for utilities: You can use named exports to export utility functions, constants, or other auxiliary elements that are meant to be used alongside the main functionality provided by the default export.

4. Granular imports: When importing from a module that uses both named and default exports, you have the flexibility to choose whether to import the default export or specific named exports, depending on your needs in each file where you import the module.

5. Avoiding naming conflicts: Using named exports allows you to avoid naming conflicts when you have multiple exports with the same name across different modules. Each named export has a unique identifier, so you can import them without worrying about conflicts.

In summary, using both named exports and a default export in the same module allows you to organize your code logically, provide clear entry points to your module's functionality, and give flexibility to consumers of your module in how they import and use its exports.



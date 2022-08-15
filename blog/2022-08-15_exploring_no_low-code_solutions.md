---
pagetitle: Exploring No/Low-Code Solutions
author: Christoph Müller
keywords: Seatable, Blog, Make
---

A long standing dream of humanity is probably to create applications without the need to learn a programming language. This manifests itself in millions of excel sheets that are probably running a lot more important processes in quite a few companies than one might guess. Now while Excel is very accessible for ordinary users and makes it easy to create simple formulas and even complex programs through VBA it usually falls flat when the need to scale arises.

Here no/low code solutions come into play by restricting the user input through column types, but at the same time offering a rich UI to configure these restrictions and constraints. This makes it possible for the computer to help the user, because it has a better understanding of what is going on. This idea is of course not new. Microsoft Access has provided a solution for decades now, but it was never really polished and never got anywhere near the momentum of Excel.

New SaaS solutions like [Airtable](https://www.airtable.com/), [Seatable](https://seatable.io/), [Baserow](https://baserow.io/) or [NocoDB](https://www.nocodb.com/) want to change that. All of them have a very similar approach. NocoDB is notably different, since it can even work with existing databases (multiple database types like Sqlite, MariaDB and PostgreSQL are supported). It is quite new and the interface is not really polished yet. The other solution have a lot in common. If you understand one of them, you are not going to have any problems switching (save for one or two features maybe).

I will choose Seatable for my future examples. It is from Germany (as am I) and it can be self hosted (just like all of them except Airtable).

### Creating a simple Invoicing System

A lot of examples and templates of these products are of course directed at the general public and beginners (I mean a wedding planner as a prime example for a No-Code solution, really?). But as a Computer Scientist I am more interested in real business processes and how they can be mapped these products. Let's start with a simple example. Say we want to create invoices, render them to PDF and send them out to clients. Additionally we want to create some basic statistics to visualize our cashflow. Let's see what the strength and weaknesses of these solutions are.

We will create 3 tables:

* Invoices - Including our final PDFs
* Position - The individual positions of an invoice
* Customers - Basic information to print on the invoice

Let's start with the customer table, since it does not depend on other tables. We create a new base (let's name it "Simple Invoices") and rename the existing table to "Customers".

![Customers Table](./2022-08-15_exploring_no_low-code_solutions/customers.png)

As you can see we just list the number, name and the address here (they are all text fields except for the first column, it has the  `auto number` type). The column on the left is the primary column. It is similar but not the same as the primary key of a database. It supports less types than the other columns. Currently one of the biggest difference between Airtable and Seatable here is the support of formulas in the primary column.

Let's continue with the invoices table. Create a new table by clicking the plus icon and name it "Invoices".

![Invoices](./2022-08-15_exploring_no_low-code_solutions/invoices.png)

Their are 6 columns:

* We create a auto number column for the invoice number it uses the current year as a prefix
* We create a reference / link column to the "Customers" table to reference the customer (remember to remove the checkbox for allowing multiple customers when creating this column, see picture below)
* The next column is the date of the invoice, we could use a `created` type column here if we usually send out invoices the same day it was created
* We define a global tax rate that applies to all positions (a simplification, but depending on the business it might just be enough)
* A short description with a default value that tells the customer to not forget to mention the invoice number in the bank transfer (can be changed)
* The last column is a  `file` column, it stores the final PDF



![Link Customer](./2022-08-15_exploring_no_low-code_solutions/customer-link.png){ width=250px }

Before we can define the button and the invoice layout we must first create our final table, the positions table. 

Create a table called "Postions".

![Invoices](./2022-08-15_exploring_no_low-code_solutions/positions.png)

This table has 7 columns:

* It has a auto number primary column (not strictly necessary)
* A reference / link to a single invoice (remember to remove the checkbox for allowing multiple invoices when creating this column)
* A short description of the item
* A net price without tax (a  `number`  /  `currency`) 
* An amount (a `number` ) 
* A type (we use a single choice here)
* The combined net price as a  `formula` (see picture below for details)

![Combined Net Price](./2022-08-15_exploring_no_low-code_solutions/combined-net-price.png){ width=250px }

Once we are done with that we can go back to the invoices table and create two new columns. One for adding all the positions and one for multiplying the result with our tax rate. You can also see that the new "Positions" column appeared all by itself when we referenced the invoice in the "Positions" table.

![Combined Net Price](./2022-08-15_exploring_no_low-code_solutions/net-price-invoice.png){ width=250px }

![Price With Tax](./2022-08-15_exploring_no_low-code_solutions/price-with-tax.png){ width=250px }

And that is it! The only thing left is creating a PDF from our table. This is done by enabling the "Page Designer" plugin (see the right corner) and designing a new template. My example can be seen below. It is pretty self explanatory. Just drag and drop the desired fields into the template.

![PDF Template](./2022-08-15_exploring_no_low-code_solutions/template.png)

Finally create a new column "Action" in the "Invoices" table to generate PDFs, by choosing the  `button` type and and selecting generate PDF as an option.

![Generation Button](./2022-08-15_exploring_no_low-code_solutions/pdf-button.jpeg){ width=250px }

That is it, we are done here!

#### Downsides

There are a couple of downsides especially when it comes to nesting. Tables can reference other tables, but a table like "Positions" really only makes sense in combination with an invoice. You can introduce groups in a view and that helps a lot, but still "Positions" should probably be embedded into "Invoices". This becomes more apparent when we want to create forms. Forms cannot yet create nested elements on the fly, so you would have to call multiple forms in succession. This is not really practical yet.

### Going a different route (for developers only)

For developers there are of course other options. One would be to use a code generator like [JHipster](https://www.jhipster.tech/). JHipster uses a domain modeling language to generate backend + frontend + database. I like the tech stack a lot, but the problem I see is the amount of friction in the beginning. You still have to generate scaffolding and write the domain language file. Whereas in something like Airtable you can start right away. JHipster is the much more flexible approach of course, but in "real" individual development projects I usually have the extra bit of time to do what JHipster does manually. And part of [our workflow](./2020-12-30_my_favorite_tech_stack.md) is actually already automated.

Another possibility I just heard of is [Superblocks](https://www.superblocks.com/). It is more like Lego for developers much more akin to something like Airtable. I like the ideas of it. It also can be used to create Dashboards and Forms and plays nicely with custom code. If a customer is willing to make some compromises (sadly that is often not the case) he/she could save quite a bit of money here and still get a decent product.


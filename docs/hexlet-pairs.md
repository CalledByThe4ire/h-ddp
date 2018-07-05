cons
----

Build pair

Parameters

-   `a` any
-   `b` any

Examples

```
const pair = cons(5, 'hello');

```

```
const pair = cons(cons(1, null), 'world');

```

Returns Pair

car
---

Get car (first element) from pair

Parameters

-   `pair` Pair

Examples

```
const pair = cons(5, 'hello');
car(pair); // 5

```

cdr
---

Get cdr (second element) from pair

Parameters

-   `pair` Pair

Examples

```
const pair = cons(5, 'hello');
cdr(pair); // hello

```

toString
--------

Convert pair to string (recursively)

Parameters

-   `pair` Pair

Examples

```
toString(cons('', 10)); // ('', 10)
```
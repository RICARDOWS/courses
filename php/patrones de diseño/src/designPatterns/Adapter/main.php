<?php
// Usage
$book = new SimpleBook("Gamma, Helm, Johnson, and Vlissides", "Design Patterns");
$bookAdapter = new BookAdapter($book);
echo 'Author and Title: '.$bookAdapter->getAuthorAndTitle();

import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("card should have three items", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1011,
      "The Avengers",
      2500,
      2012,
      "The USA",
      "Avengers Assemble!",
      ["action movie", "fantastic"],
      "137 мин",
      "Marvel"
    )
  );

  expect(cart.items.length).toBe(3);
});

test("sum should be 5400", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1011,
      "The Avengers",
      2500,
      2012,
      "The USA",
      "Avengers Assemble!",
      ["action movie", "fantastic"],
      "137 мин",
      "Marvel"
    )
  );

  expect(cart.countTotal()).toBe(5400);
});

test("sum should be 200", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 100, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 100));
  expect(cart.countTotal()).toBe(200);
});

test("sum with discount 10% should be 4860", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1011,
      "The Avengers",
      2500,
      2012,
      "The USA",
      "Avengers Assemble!",
      ["action movie", "fantastic"],
      "137 мин",
      "Marvel"
    )
  );

  expect(cart.countTotalWithDiscount(10)).toBe(4860);
});

test("card should have two items", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(
    new Movie(
      1011,
      "The Avengers",
      2500,
      2012,
      "The USA",
      "Avengers Assemble!",
      ["action movie", "fantastic"],
      "137 мин",
      "Marvel"
    )
  );
  cart.removeCart(1001);

  expect(cart.items.length).toBe(2);
});

test("card shouldn't have two MusicAlbum", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

  expect(cart.items.length).toBe(2);
});
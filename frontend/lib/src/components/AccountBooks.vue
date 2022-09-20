<template>
  <div class="wrapper">
    <div class="books-title">Create your book</div>

    <label for="">Title</label>
    <input type="text" v-model="BOOKS.title" />
    <button @click="addNewBook()">addNewBook</button>

    Count of books {{ this.BOOKS.length }}

    <div class="book-container">
      <div class="row">
        <div class="wrapper" v-for="(book, index) in BOOKS" :key="book.id">
          <router-link :to="{ name: 'bookitem', params: { id: book.id } }">
            <li>Book - {{ book.id }} / {{ index }}</li>
            <div class="book-img">
              <img :src="book.image_url" :alt="book.title" />
            </div>
            <div class="book-title">{{ book.title }}</div>
            <div class="book-title">{{ book.date }}</div>

          </router-link>
          <div class="flex">
            <button @click="RemoveBook(book, index)" class="ui-btn">
              Delete
            </button>
          </div>
        </div>
        <!-- <router-link
          v-for="book in BOOKS"
          :to="{name: booksitem}"
          :key="book.id"
        >
          <div class="book-img">
            <img :src="book.image_url" :alt="book.title" />
          </div>
          <div class="book-title">{{ book.title }}</div>
          <div class="flex">
            <button @click="RemoveBook(book)" class="ui-btn">Delete</button>
            <router-link :to="{ name: 'bookInfo' }">bookInfo</router-link>
          </div>
        </router-link> -->

        <!-- <div v-for="book in BOOKS" :key="book.id" class="book-item col-3">
          <div class="book-img">
            <img :src="book.image_url" :alt="book.title" />
          </div>
          <div class="book-title">{{ book.title }}</div>
          <div class="flex">
            <button @click="RemoveBook(book)" class="ui-btn">Delete</button>
            <button @click="infoBook(book)" class="ui-btn">info</button>
          </div>
        </div> -->

      
      </div>
    </div>
<br><br><hr><br><br>
<ul>
  <li v-for="delitem in DELBOOK" :key="delitem.id">
    {{delitem.title}}
    {{delitem.date}}
  </li>
</ul>
    <!-- <bookInfoVue></bookInfoVue> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import bookInfoVue from './bookInfo.vue';

export default {
  name: "AccaountBooks",
  components: {
    // bookInfoVue,
  },
  data() {
    return {
      bookID: 1,
      userBooks: [],
      stateOfBook: null,
      errors: [],
    };
  },
  methods: {
    printDate: function () {
      return new Date().toLocaleTimeString();
     },
    addNewBook() {
      const newBooks = {
        title: this.BOOKS.title,
        id: this.bookID++,
        date: this.printDate()
      };
      this.ADD_NEW_BOOKS(newBooks);
    },
    infoBook(book) {
      this.SHOW_INFO_BOOK(book);
    },

    RemoveBook(book) {
      book.date = this.printDate()
      this.DELETE_BOOK(book);
    },
    ...mapActions([
      "GET_BOOKS_FROM_API",
      "ADD_NEW_BOOKS",
      "DELETE_BOOK",
      "SHOW_INFO_BOOK",
    ]),
  },
  computed: {
    ...mapGetters(["BOOKS",'DELBOOK']),
  },
  mounted() {
    this.GET_BOOKS_FROM_API();
  },
};
</script>

<style lang="scss">
.books {
  &-title {
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    margin-bottom: 25px;
  }
  &-input {
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
}
.book {
  &-img {
    display: block;
    line-height: 0;
    margin-bottom: 35px;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      height: 100%;
      max-width: 150%;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
  }
  &-title {
    text-align: center;
  }
  &-popup {
    display: none;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: rgba(210, 105, 30, 0.296);
    top: 0;
    left: 0;
  }
  &-item {
    margin-bottom: 25px;
  }
}

.popupIsOpen {
  display: block;
}
</style>

<template>
  <div class="wrapper">
    <div class="books-title">Create your book</div>

    <div class="ui-form books-form">
      <div class="ui-form-field">
        <label for="title">Think up a title for your book</label>
        <input
          type="text"
          v-model="BOOKS.title"
          placeholder="Title"
          id="title"
        />
      </div>
      <div class="ui-form-field">
        <label for="title">Sign your book</label>
        <input type="text" v-model="BOOKS.author" placeholder="Author" />
      </div>
      <div class="ui-form-field">
        <label for="title">Enter the ISBN code</label>
        <input type="text" v-model="BOOKS.ISBN" placeholder="ISBN" />
      </div>
      <div class="ui-form-field">
        <label for="title">Think up a title for your book</label>
        <textarea type="text" v-model="BOOKS.storyline" placeholder="Text" />
      </div>
      <button class="ui-btn books-form-btn" @click="addNewBook()">
        addNewBook
      </button>

      <transition name="fade" mode="out-in">
        <template v-if="this.BOOKS.length > 0">
          <div class="books-form-background"></div>
        </template>
      </transition>
    </div>

    <template v-if="this.BOOKS.length > 0">
      <div class="book-container" ref="bookitem">
        <div class="row">
          <div class="col-md-10">
            <div class="books-header">
              <div class="books-header-title">Library</div>
              <div class="books-header-subtitle">
                You've already written this many books - {{ this.BOOKS.length }}
              </div>
            </div>

            <div class="row">
              <div
                class="col-sm-6"
                v-for="(book, index) in BOOKS"
                :key="book.index"
              >
                <div class="book-wrapper">
                  <div class="book-img">
                    <!-- <img :src="book.image_url" :alt="book.title" /> -->
                  </div>
                  <div class="book-title">{{ book.title }}</div>
                  <!-- <div class="book-title">{{ book.date }}</div> -->
                  <div class="book-author">{{ book.author }}</div>

                  <div class="book-footer flex space-between">
                    <router-link
                      :to="{ name: 'bookitem', params: { id: book.id } }"
                      class="ui-btn book-btn-edit"
                    >
                      Edit
                    </router-link>
                    <button
                      @click="RemoveBook(book, index)"
                      class="ui-btn book-btn-delete"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <div class="books-title">Deleted books</div>
            <div class="deleted-books">
              <div
                class="deleted-books-item"
                v-for="delitem in DELBOOK"
                :key="delitem.id"
              >
                {{ delitem.title }}
                -
                {{ delitem.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AccaountBooks",
  components: {},
  data() {
    return {
      // bookID: 1,
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
      this.SET_ADD_BOOKID();
      const newBooks = {
        id: this.BOOKID,
        title: this.BOOKS.title,
        author: this.BOOKS.author,
        ISBN: this.BOOKS.ISBN,
        date: this.printDate(),
        storyline: this.BOOKS.storyline,
      };
      this.ADD_NEW_BOOKS(newBooks);
      // const el = document.getElementById('el');
      this.$refs.bookitem.scrollIntoView({behavior: "smooth"});
      // el.scrollIntoView();
    },
    infoBook(book) {
      this.SHOW_INFO_BOOK(book);
    },

    RemoveBook(book) {
      book.date = this.printDate();
      this.DELETE_BOOK(book);
    },

    ...mapActions([
      "GET_BOOKS_FROM_API",
      "ADD_NEW_BOOKS",
      "DELETE_BOOK",
      "SHOW_INFO_BOOK",
    ]),
    ...mapMutations(["SET_ADD_BOOKID"]),
  },
  computed: {
    ...mapGetters(["BOOKS", "DELBOOK", "BOOKID"]),
  },
  mounted() {
    this.GET_BOOKS_FROM_API();
  },
};
</script>

<style lang="scss">
.books {
  &-header {
    margin-bottom: 25px;
    text-align: center;
    &-title {
      font-weight: 700;
      font-size: 28px;
    }
    &-subtitle {
      font-size: 14px;
    }
  }
  &-title {
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    margin-bottom: 25px;
  }
  &-form {
    margin: 0 auto;
    max-width: 800px;
    &-btn {
      margin: 0 auto;
      display: block;
      max-width: 250px;
    }
    &-background {
      background-image: url(../images/arrow-down.png);
      background-repeat: no-repeat;
      background-position: center;
      height: 500px;
      width: 100%;
    }
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
    margin-bottom: 15px;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    position: relative;
    border: 1px solid rgb(255, 207, 110);
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
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }
  &-author {
    font-size: 14px;
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
  &-wrapper {
    margin-bottom: 25px;
  }
  &-btn {
    &-delete {
      background-image: url(../images/svg/delete.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      background-color: #fff;
      border: 1px solid #ff7979;
      &:hover {
        background-color: #ff7979;
      }
    }
    &-edit {
      flex: 0 0 80%;
      max-width: 80%;
      background: #7ed6df;
      border: 1px solid #7ed5df00;
      &:hover {
        color: #000;
        background: #fff;
        border: 1px solid #7ed6df;
      }
    }
  }
  &-footer {
    gap: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
}
</style>

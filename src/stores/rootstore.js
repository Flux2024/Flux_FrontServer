import { defineStore } from "pinia";

// 네비게이션 경로 설정관련 로직
export const useMarketStore = defineStore("useMarketStore", {
  state: () => ({
    root: "main", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});

export const useArticleStore = defineStore("useArticleStore", {
  state: () => ({
    root: "main", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});

export const useSalesStore = defineStore("useSalesStore", {
  state: () => ({
    root: "registry", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});

export const useMypageStore = defineStore("useMypageStore", {
  state: () => ({
    root: "wishlist", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});

export const useManagerUser= defineStore("useManagerUser", {
  state: () => ({
    root: "main",
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  }
});

export const useManagerArticle = defineStore("useManagerArticle", {
  state: () => ({
    root: "articlelist", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    }
  }
});


export const useManagerUser = defineStore("useManagerUser", {
  state: () => ({
    root: "userlist", // 초기값 설정

  }),
  actions: {
    setRoot(option) {
      this.root = option;
    }
  }
});
export const useManagerNotice = defineStore("useManagerNotice", {
  state: () => ({
    root: "noticelist", 
    }),
  actions: {
    setRoot(option) {
      this.root = option;
    }
  }

});

const values = {
                b1t: 1,
                b1b: 1,
                b2: 2,
                b3: 3,
                b5: 5
              }
export default {
  data() {
    return {
      b1t: {'isHour': false, 'isMinute': false, 'background-color': ''},
      b1b: {'isHour': false, 'isMinute': false, 'background-color': ''},
      b2: {'isHour': false, 'isMinute': false, 'background-color': ''},
      b3: {'isHour': false, 'isMinute': false, 'background-color': ''},
      b5: {'isHour': false, 'isMinute': false, 'background-color': ''}
    }
  },
  mounted() {
    // begins the start action in the store
    this.$store.dispatch('start')
  },
  computed: {
    now () {
      // watches the store getter for changes and updates accordingly
      return this.$store.getters.now;
    }
  },
  methods: {
    clockWorks: (h, m) => {
      let fibseq = [5,3,2,1,1]

      var i = 0;
			while(h>0 && i < 5){
				if(h >= fibseq[i]){
					h -= fibseq[i]
					display[i].isHour = true;
				}
				i++;
			}

    }
  }
}

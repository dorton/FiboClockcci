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
  beforeMount() {
    setInterval(() => { this.clockWorks(this.$store.getters.hour,this.$store.getters.minute) }, 500)
  },
  mounted() {
    // begins the start action in the store
    this.$store.dispatch('start')
    this.$store.dispatch('startH')
    this.$store.dispatch('startM')
  },
  computed: {
    // watches the store getter for changes and updates accordingly
    now() {
      return this.$store.getters.now
    }
  },
  methods: {
    clockWorks(h,m) {
      let fibseq = [5,3,2,1,1]
      let boxes = [this.b5, this.b3, this.b2, this.b1b, this.b1t]
      // hour blocks
			_.each(fibseq, (v,k) => {
        if(h >= fibseq[k]){
					h -= fibseq[k]
					boxes[k]['isHour'] = true;
				}
      })
      // minute blocks
      let dividedAndRoundedMinutes = _.round(m/5)
      _.each(fibseq, (v,k) => {
        if(dividedAndRoundedMinutes >= fibseq[k]){
					dividedAndRoundedMinutes -= fibseq[k]
					boxes[k]['isMinute'] = true;
				}
      })
      // set the colors
      _.each(boxes, (v,k) => {
        if(v['isHour'] && v['isMinute']){
          v['background-color'] = 'blue'
        }else if (v['isHour']) {
            v['background-color'] = 'red'
        }else if (v['isMinute']) {
              v['background-color'] = 'green'
        }
      })
    }
  }
}
import TimeZones from './timeZones.vue'

export default {
  components: {
    TimeZones
  },
  data() {
    return {
      b1t: {'isHour': false, 'isMinute': false, 'background-color': ''},
      b1b: {'isHour': false, 'isMinute': false, 'background-color': ''},
      b2: {'isHour': false, 'isMinute': false, 'background-color': ''},
      b3: {'isHour': false, 'isMinute': false, 'background-color': ''},
      b5: {'isHour': false, 'isMinute': false, 'background-color': ''},
      tzLabel: this.$moment.tz.guess(),
      tzLabels: '',
      zoneUpdated: false
    }
  },
  beforeMount() {
        // begins the start action in the store
        this.tzLabels = this.$moment.tz.names()
  },
  mounted() {
    setInterval(() => {
      if (this.zoneUpdated) {
        var theZone = this.tzLabel
      }else {
        theZone = this.$moment.tz.guess()
      }
      this.$store.dispatch('update', theZone)
      this.clockWorks(this.$store.getters.hour, this.$store.getters.minute)
    }, 1000)
  },
  computed: {
    // watches the store getter for changes and updates accordingly
    now() {
      return this.$store.getters.now
    },
  },
  methods: {
    initialState(){
        this.b1t = {'isHour': false, 'isMinute': false, 'background-color': ''},
        this.b1b = {'isHour': false, 'isMinute': false, 'background-color': ''},
        this.b2 = {'isHour': false, 'isMinute': false, 'background-color': ''},
        this.b3 = {'isHour': false, 'isMinute': false, 'background-color': ''},
        this.b5 = {'isHour': false, 'isMinute': false, 'background-color': ''}
    },
    zoneUpdate() {
      this.zoneUpdated = true
      this.$store.dispatch('update', this.tzLabel)
      this.initialState()
    },
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

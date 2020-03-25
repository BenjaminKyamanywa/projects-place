<template>
    <div>
        <b-jumbotron>
         

        <template v-slot:lead>
            {{currentQuestion.question}}
        </template>

        <hr class="my-4">

        <b-list-group>
            <b-list-group-item
                v-for="(answer, index) in answers"
                :key="index"
                @click="selectAnswer(index)"
                :class="[selectedIndex === index ? 'selected' : '']"
            >
                {{answer}}
            </b-list-group-item>
        </b-list-group>

        <b-button variant="primary" href="#">Submit</b-button>
        <b-button @click="nextQuestion" href="#">Next Question</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    props : {
        currentQuestion: Object,
        nextQuestion: Function
    },
    data () {
        return {
            selectedIndex: null
        }
    },
    watch: {
        currentQuestion() {
            this.selectedIndex = null
            this.shuffleAnswers()
        }
    },
    computed: {
        answers () {
            let answers = [...this.currentQuestion.incorrectAnswers]
            answers.push(this.currentQuestion.correctAnswer)
            return answers
        }
    },
    methods: {
        selectAnswer (index) {
            this.selectedIndex = index
        },
        shuffleAnswers() {
            // let answers = [...this.currentQuestion.incorrectAnswers, this.currentQuestion.correctAnswer]
            
        }

    }
}
</script>

<style scoped>
.list-group {
    margin-bottom: 15px;
}

.btn {
    margin: 0 5px;
}

.list-group-item:hover {
    background: #eee;
    cursor: pointer;
}

.selected {
    background-color: lightblue;
}

.correct {
    background-color: lightgreen;
}

.incorrect {
    background-color: red;
}
</style>
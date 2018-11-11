const axios = require('axios')
const {SLACK_URL} = require('./config')

function payloadProblem(train, carriage, seat, manager, issue) {
  return {
    text: `Train *${train}* | Carriage \`${carriage}\` | _Seat ${seat}_`,
    attachments: [
      {
        color: '#ff0000',
        author_name: `for ${manager}`,
        title: issue,
        actions: [
          {
            name: 'issue',
            text: 'Resolve',
            type: 'button',
            value: 'resolved',
            style: 'primary',
            url: 'https://squixy.fwd.wf',
            confirm: {
              title: 'Are you sure?',
              text: 'Have you solved the problem?',
              ok_text: 'Yes',
              dismiss_text: 'No'
            }
          }
        ],
        footer_icon: 'https://img.icons8.com/ios/50/000000/high-speed-train-filled.png',
        footer: 'Reported at',
        ts: Date.now()
      }
    ]
  }
}

function payloadSolution(train, carriage, seat, manager, issue) {
  return {
    text: `Train *${train}* | Carriage \`${carriage}\` | _Seat ${seat}_`,
    attachments: [
      {
        color: '00ff00',
        author_name: `by ${manager}`,
        pretext: `~${issue}~ :white_check_mark:`,
        fields: [
          {
            title: 'Status',
            value: 'Solved'
          }
        ],
        image_url: 'https://image.ibb.co/ezD0LA/car-box-our-company-2018.jpg',
        footer: 'Resolved at',
        footer_icon: 'https://img.icons8.com/ios/50/000000/high-speed-train.png',
        ts: Date.now()
      }
    ]
  }
}

function postToSlack(payload) {
  axios.post(SLACK_URL, payload)
  .then(console.log.bind(console))
  .catch(console.log.bind(console))
}

function reportProblem({train, carriage, seat, manager, issue}) {
  postToSlack(payloadProblem(train, carriage, seat, manager, issue))
}

function resolveProblem({train, carriage, seat, manager, issue}) {
  postToSlack(payloadSolution(train, carriage, seat, manager, issue))
}

module.exports = {reportProblem, resolveProblem}

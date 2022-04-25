const  AWS  =  require ( 'aws-sdk' );

AWS.config.update({"region": 'us-east-1',  accessKeyId: "AKIAYLDVPCMB33UXL3OZ", secretAccessKey: "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" })

// {nextSequenceToken: '49613044228855899391047772384411611445420826973918200258'}

const cloudwatchlogs = new AWS.CloudWatchLogs();
var params = {

    logEvents: [{"timestamp": new Date().getTime(), "message": `{data: \"asdasdasd\"}` }],
    logGroupName: "dev-gestion-incidencias",
    logStreamName: "qa",
    sequenceToken: "49622625596042702935804097149362654908785640127661605890"
}
const promise = new Promise((resolve, reject)=> {
   cloudwatchlogs.putLogEvents(params, function(err,data) {
       if(err) reject(err)
       resolve(data)
    })
})
promise.then(data => { console.log(data)})
       .catch(err => { console.log(err)})

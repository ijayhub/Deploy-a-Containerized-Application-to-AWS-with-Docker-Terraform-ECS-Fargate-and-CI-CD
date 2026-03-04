resource "aws_ecs_service" "job_tracker_service" {
  name            = "job-tracker-service"
  cluster         = aws_ecs_cluster.job_tracker.id
  task_definition = aws_ecs_task_definition.job_tracker_task.arn
  launch_type     = "FARGATE"
  desired_count   = 1

  network_configuration {
    subnets         = [
      aws_subnet.public_1.id,
      aws_subnet.public_2.id
    ]
    security_groups  = [aws_security_group.ecs_sg.id]
    assign_public_ip = true
  }

   
  depends_on = [
    aws_iam_role_policy_attachment.ecs_task_execution_policy
  ]
}


 


#!/bin/bash
# GitHub에 파일 업로드하는 스크립트

echo "=== Git 상태 확인 ==="
git status

echo -e "\n=== 모든 파일 스테이징 ==="
git add .

echo -e "\n=== 커밋 생성 ==="
read -p "커밋 메시지를 입력하세요: " commit_message
git commit -m "$commit_message"

echo -e "\n=== GitHub에 푸시 ==="
git push -u origin main

echo -e "\n완료! GitHub 저장소를 확인하세요."

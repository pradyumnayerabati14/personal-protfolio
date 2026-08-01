#!/usr/bin/env python3
"""
Backend API Testing Script
Tests all backend endpoints for the portfolio application
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from environment
BACKEND_URL = "https://resume-gallery-11.preview.emergentagent.com/api"

def print_test_header(test_name):
    """Print formatted test header"""
    print(f"\n{'='*60}")
    print(f"TEST: {test_name}")
    print(f"{'='*60}")

def print_result(success, message):
    """Print test result"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")

def test_root_endpoint():
    """Test GET /api/ endpoint"""
    print_test_header("Root Endpoint")
    try:
        response = requests.get(f"{BACKEND_URL}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data:
                print_result(True, f"Root endpoint working. Response: {data}")
                return True
            else:
                print_result(False, f"Unexpected response format: {data}")
                return False
        else:
            print_result(False, f"Status code: {response.status_code}, Response: {response.text}")
            return False
    except Exception as e:
        print_result(False, f"Exception: {str(e)}")
        return False

def test_status_check_create():
    """Test POST /api/status endpoint"""
    print_test_header("Create Status Check")
    try:
        payload = {
            "client_name": "Test Client Portfolio"
        }
        response = requests.post(
            f"{BACKEND_URL}/status",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            if "id" in data and "client_name" in data and data["client_name"] == payload["client_name"]:
                print_result(True, f"Status check created successfully. ID: {data['id']}")
                return True, data["id"]
            else:
                print_result(False, f"Unexpected response format: {data}")
                return False, None
        else:
            print_result(False, f"Status code: {response.status_code}, Response: {response.text}")
            return False, None
    except Exception as e:
        print_result(False, f"Exception: {str(e)}")
        return False, None

def test_status_check_get():
    """Test GET /api/status endpoint"""
    print_test_header("Get Status Checks")
    try:
        response = requests.get(f"{BACKEND_URL}/status", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print_result(True, f"Retrieved {len(data)} status checks")
                return True
            else:
                print_result(False, f"Expected list, got: {type(data)}")
                return False
        else:
            print_result(False, f"Status code: {response.status_code}, Response: {response.text}")
            return False
    except Exception as e:
        print_result(False, f"Exception: {str(e)}")
        return False

def test_contact_form_submit():
    """Test POST /api/contact endpoint"""
    print_test_header("Submit Contact Form")
    try:
        payload = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "subject": "Portfolio Inquiry",
            "message": "I am interested in discussing a potential collaboration opportunity."
        }
        response = requests.post(
            f"{BACKEND_URL}/contact",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            if all(key in data for key in ["id", "name", "email", "subject", "message"]):
                if data["name"] == payload["name"] and data["email"] == payload["email"]:
                    print_result(True, f"Contact form submitted successfully. ID: {data['id']}")
                    return True, data["id"]
                else:
                    print_result(False, f"Data mismatch in response: {data}")
                    return False, None
            else:
                print_result(False, f"Missing fields in response: {data}")
                return False, None
        else:
            print_result(False, f"Status code: {response.status_code}, Response: {response.text}")
            return False, None
    except Exception as e:
        print_result(False, f"Exception: {str(e)}")
        return False, None

def test_contact_messages_get():
    """Test GET /api/contact/messages endpoint"""
    print_test_header("Get Contact Messages")
    try:
        response = requests.get(f"{BACKEND_URL}/contact/messages", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print_result(True, f"Retrieved {len(data)} contact messages")
                if len(data) > 0:
                    print(f"Sample message: {data[0].get('name', 'N/A')} - {data[0].get('subject', 'N/A')}")
                return True
            else:
                print_result(False, f"Expected list, got: {type(data)}")
                return False
        else:
            print_result(False, f"Status code: {response.status_code}, Response: {response.text}")
            return False
    except Exception as e:
        print_result(False, f"Exception: {str(e)}")
        return False

def test_download_cv():
    """Test GET /api/download-cv endpoint"""
    print_test_header("Download CV/Resume")
    try:
        response = requests.get(f"{BACKEND_URL}/download-cv", timeout=10)
        
        if response.status_code == 200:
            content_type = response.headers.get('content-type', '')
            if 'application/pdf' in content_type:
                content_length = len(response.content)
                print_result(True, f"CV downloaded successfully. Size: {content_length} bytes")
                return True
            else:
                print_result(False, f"Unexpected content type: {content_type}")
                return False
        elif response.status_code == 404:
            print_result(False, "Resume file not found on server")
            return False
        else:
            print_result(False, f"Status code: {response.status_code}, Response: {response.text}")
            return False
    except Exception as e:
        print_result(False, f"Exception: {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("\n" + "="*60)
    print("BACKEND API TESTING - PORTFOLIO APPLICATION")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"Test Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*60)
    
    results = []
    
    # Test 1: Root endpoint
    results.append(("Root Endpoint", test_root_endpoint()))
    
    # Test 2: Create status check
    success, status_id = test_status_check_create()
    results.append(("Create Status Check", success))
    
    # Test 3: Get status checks
    results.append(("Get Status Checks", test_status_check_get()))
    
    # Test 4: Submit contact form
    success, contact_id = test_contact_form_submit()
    results.append(("Submit Contact Form", success))
    
    # Test 5: Get contact messages
    results.append(("Get Contact Messages", test_contact_messages_get()))
    
    # Test 6: Download CV
    results.append(("Download CV", test_download_cv()))
    
    # Summary
    print("\n" + "="*60)
    print("TEST SUMMARY")
    print("="*60)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    print("="*60)
    
    return passed == total

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)

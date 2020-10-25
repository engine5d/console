// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package user_api

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// EnableBucketEncryptionOKCode is the HTTP code returned for type EnableBucketEncryptionOK
const EnableBucketEncryptionOKCode int = 200

/*EnableBucketEncryptionOK A successful response.

swagger:response enableBucketEncryptionOK
*/
type EnableBucketEncryptionOK struct {
}

// NewEnableBucketEncryptionOK creates EnableBucketEncryptionOK with default headers values
func NewEnableBucketEncryptionOK() *EnableBucketEncryptionOK {

	return &EnableBucketEncryptionOK{}
}

// WriteResponse to the client
func (o *EnableBucketEncryptionOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

/*EnableBucketEncryptionDefault Generic error response.

swagger:response enableBucketEncryptionDefault
*/
type EnableBucketEncryptionDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewEnableBucketEncryptionDefault creates EnableBucketEncryptionDefault with default headers values
func NewEnableBucketEncryptionDefault(code int) *EnableBucketEncryptionDefault {
	if code <= 0 {
		code = 500
	}

	return &EnableBucketEncryptionDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the enable bucket encryption default response
func (o *EnableBucketEncryptionDefault) WithStatusCode(code int) *EnableBucketEncryptionDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the enable bucket encryption default response
func (o *EnableBucketEncryptionDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the enable bucket encryption default response
func (o *EnableBucketEncryptionDefault) WithPayload(payload *models.Error) *EnableBucketEncryptionDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the enable bucket encryption default response
func (o *EnableBucketEncryptionDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *EnableBucketEncryptionDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

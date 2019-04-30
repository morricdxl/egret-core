//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////


namespace egret {

    /**
     * Transform that takes care about its versions
     *
     * @class
     * @memberof PIXI
     */
    export class Transform2D {

        public readonly worldTransform: Matrix = new Matrix;
        public readonly localTransform: Matrix = new Matrix;
        public _localID: number = 0;
        public _currentLocalID: number = 0;
        public _worldID: number = 0;
        public _parentID: number = 0;
        public __$offsetX__: number = 0;
        public __$offsetY__: number = 0;

        constructor() {
            /**
             * The global matrix transform. It can be swapped temporarily by some functions like getLocalBounds()
             *
             * @member {PIXI.Matrix}
             */
            //this.worldTransform = new Matrix();

            /**
             * The local matrix transform
             *
             * @member {PIXI.Matrix}
             */
            //this.localTransform = new Matrix();

            /**
             * The coordinate of the object relative to the local coordinates of the parent.
             *
             * @member {PIXI.ObservablePoint}
             */
            //this.position = new ObservablePoint(this.onChange, this, 0, 0);

            /**
             * The scale factor of the object.
             *
             * @member {PIXI.ObservablePoint}
             */
            //this.scale = new ObservablePoint(this.onChange, this, 1, 1);

            /**
             * The pivot point of the displayObject that it rotates around.
             *
             * @member {PIXI.ObservablePoint}
             */
            //this.pivot = new ObservablePoint(this.onChange, this, 0, 0);

            /**
             * The skew amount, on the x and y axis.
             *
             * @member {PIXI.ObservablePoint}
             */
            // this.skew = new ObservablePoint(this.updateSkew, this, 0, 0);

            // this._rotation = 0;

            // this._cx = 1; // cos rotation + skewY;
            // this._sx = 0; // sin rotation + skewY;
            // this._cy = 0; // cos rotation + Math.PI/2 - skewX;
            // this._sy = 1; // sin rotation + Math.PI/2 - skewX;

            // this._localID = 0;
            // this._currentLocalID = 0;

            // this._worldID = 0;
            // this._parentID = 0;
        }

        /**
         * Called when a value changes.
         *
         * @private
         */
        onChange() {
            this._localID++;
        }

        /**
         * Called when skew or rotation changes
         *
         * @private
         */
        updateSkew() {
            // this._cx = Math.cos(this._rotation + this.skew._y);
            // this._sx = Math.sin(this._rotation + this.skew._y);
            // this._cy = -Math.sin(this._rotation - this.skew._x); // cos, added PI/2
            // this._sy = Math.cos(this._rotation - this.skew._x); // sin, added PI/2

            this._localID++;
        }

        /**
         * Updates only local matrix
         */
        updateLocalTransform(displayObject: DisplayObject) {
            /*
            if (this._localID !== this._currentLocalID) {
                this.$getMatrix();//这里有更新,虽然丑点，就这么写吧
                this._currentLocalID = this._localID;
                this._parentID = -1;
            }
            if (this._parentID !== parent._worldID) {
                //this.world = parent.world * this.local
                this.__$offsetX__ = parent.__$offsetX__ + this.$x;
                this.__$offsetY__ = parent.__$offsetY__ + this.$y;
                //
                const wt = parent.$worldTransform;
                const lt = this.$getMatrix();
                const worldtransform = this.$worldTransform;
                if (this.$useTranslate) {
                    worldtransform.a = lt.a * wt.a + lt.b * wt.c;
                    worldtransform.b = lt.a * wt.b + lt.b * wt.d;
                    worldtransform.c = lt.c * wt.a + lt.d * wt.c;
                    worldtransform.d = lt.c * wt.b + lt.d * wt.d;
                    worldtransform.tx = lt.tx * wt.a + lt.ty * wt.c + wt.tx;
                    worldtransform.ty = lt.tx * wt.b + lt.ty * wt.d + wt.ty;
                    this.__$offsetX__ = -this.$anchorOffsetX;
                    this.__$offsetY__ = -this.$anchorOffsetY;
                }
                else {
                    worldtransform.a = wt.a;
                    worldtransform.b = wt.b;
                    worldtransform.c = wt.c;
                    worldtransform.d = wt.d;
                    this.__$offsetX__ += -this.$anchorOffsetX;
                    this.__$offsetY__ += -this.$anchorOffsetY;
                }
                //下放给子类的实现
                this.onUpdateTransform(parent);
                this._parentID = parent._worldID;
                ++this._worldID;
                this.$offsetMatrixDirty = true;
            }
            */
            //const lt = this.localTransform;
            if (this._localID !== this._currentLocalID) {
                ///
                const sm = displayObject.$getMatrix();
                const lm = this.localTransform;
                lm.setTo(sm.a, sm.b, sm.c, sm.d, sm.tx, sm.ty);
                // get the matrix values of the displayobject based on its transform properties..
                // lt.a = this._cx * this.scale._x;
                // lt.b = this._sx * this.scale._x;
                // lt.c = this._cy * this.scale._y;
                // lt.d = this._sy * this.scale._y;

                // lt.tx = this.position._x - ((this.pivot._x * lt.a) + (this.pivot._y * lt.c));
                // lt.ty = this.position._y - ((this.pivot._x * lt.b) + (this.pivot._y * lt.d));
                this._currentLocalID = this._localID;

                // force an update..
                this._parentID = -1;
            }
        }

        /**
         * Updates the values of the object and applies the parent's transform.
         *
         * @param {PIXI.Transform} parentTransform - The transform of the parent of this object
         */
        public updateTransform(displayObject: DisplayObject, parentTransform: Transform2D): void {
            this.updateLocalTransform(displayObject);
            /*
            if (this._localID !== this._currentLocalID) {
                // get the matrix values of the displayobject based on its transform properties..
                // lt.a = this._cx * this.scale._x;
                // lt.b = this._sx * this.scale._x;
                // lt.c = this._cy * this.scale._y;
                // lt.d = this._sy * this.scale._y;

                // lt.tx = this.position._x - ((this.pivot._x * lt.a) + (this.pivot._y * lt.c));
                // lt.ty = this.position._y - ((this.pivot._x * lt.b) + (this.pivot._y * lt.d));
                this._currentLocalID = this._localID;

                // force an update..
                this._parentID = -1;
            }
            */
            //const lt = this.localTransform;
            if (this._parentID !== parentTransform._worldID) {
                /*
                // concat the parent matrix with the objects transform.
                const pt = parentTransform.worldTransform;
                const wt = this.worldTransform;

                wt.a = (lt.a * pt.a) + (lt.b * pt.c);
                wt.b = (lt.a * pt.b) + (lt.b * pt.d);
                wt.c = (lt.c * pt.a) + (lt.d * pt.c);
                wt.d = (lt.c * pt.b) + (lt.d * pt.d);
                wt.tx = (lt.tx * pt.a) + (lt.ty * pt.c) + pt.tx;
                wt.ty = (lt.tx * pt.b) + (lt.ty * pt.d) + pt.ty;
                */
                //this.world = parent.world * this.local
                this.__$offsetX__ = parentTransform.__$offsetX__ + displayObject.$x;
                this.__$offsetY__ = parentTransform.__$offsetY__ + displayObject.$y;
                //
                const wt = parentTransform.worldTransform;
                const lt = this.localTransform;//this.$getMatrix();
                const worldtransform = this.worldTransform;
                if (displayObject.$useTranslate) {
                    worldtransform.a = lt.a * wt.a + lt.b * wt.c;
                    worldtransform.b = lt.a * wt.b + lt.b * wt.d;
                    worldtransform.c = lt.c * wt.a + lt.d * wt.c;
                    worldtransform.d = lt.c * wt.b + lt.d * wt.d;
                    worldtransform.tx = lt.tx * wt.a + lt.ty * wt.c + wt.tx;
                    worldtransform.ty = lt.tx * wt.b + lt.ty * wt.d + wt.ty;
                    this.__$offsetX__ = -displayObject.$anchorOffsetX;
                    this.__$offsetY__ = -displayObject.$anchorOffsetY;
                }
                else {
                    worldtransform.a = wt.a;
                    worldtransform.b = wt.b;
                    worldtransform.c = wt.c;
                    worldtransform.d = wt.d;
                    this.__$offsetX__ += -displayObject.$anchorOffsetX;
                    this.__$offsetY__ += -displayObject.$anchorOffsetY;
                }
                this._parentID = parentTransform._worldID;
                // update the id of the transform..
                ++this._worldID;
            }
        }

        /**
         * Decomposes a matrix and sets the transforms properties based on it.
         *
         * @param {PIXI.Matrix} matrix - The matrix to decompose
         */
        // setFromMatrix(matrix) {
        //     matrix.decompose(this);
        //     this._localID++;
        // }

        /**
         * The rotation of the object in radians.
         *
         * @member {number}
         */
        // get rotation() {
        //     return this._rotation;
        // }

        // set rotation(value) // eslint-disable-line require-jsdoc
        // {
        //     if (this._rotation !== value) {
        //         this._rotation = value;
        //         this.updateSkew();
        //     }
        // }
    }

    //Transform.IDENTITY = new Transform();
}